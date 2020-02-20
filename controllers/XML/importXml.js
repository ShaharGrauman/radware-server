var fs = require('fs');
var convert = require('xml-js');

const {roles_users, users,signatures, externalReferences } = require('../../models');
const { findById } = require('../../controllers/signature');
var SignatureController = require('../../controllers/signature');



addSignatureToDataTable = async (signatureData) => {
  try {
    const signatureDataCreate = await signatures.create({
        user_id: signatureData.user_id,
        pattern_id: signatureData.PatternID,
        attack_id: signatureData.attack_id,
        type: signatureData.type,
        creation_time: signatureData.creation_time,
        creation_date: signatureData.creation_date,
        status: signatureData.status,
        in_qa_internal_status_manual: 'init',
        in_qa_internal_status_performance: 'init',
        in_qa_internal_status_automation: 'init',
        vuln_data: signatureData.VulnData || 'fake data',
        keep_order: signatureData.KeepOrder ,
        start_break: null,
        end_break: null,
        right_index: signatureData.RightIndex,
        left_index: signatureData.LeftIndex,
        scan_uri: signatureData.ScanUri,
        scan_header: signatureData.ScanHeader,
        scan_body: signatureData.ScanBody,
        scan_parameters: signatureData.ScanParameters,
        scan_file_name: signatureData.scan_file_name,
        severity: signatureData.Severity,
        description: signatureData.Description || null,
        test_data: 'FAKE TEST DATA',
        attack_id: signatureData.attackId || null,
        user_id: signatureData.userId,
        limit: signatureData.limit || null
    });
    //// feach file data 
    // signatureData.files.map(FileData => {

    //     file.create({
    //         // id: FileData.id,
    //         signatureId: signatureDataCreate.id,
    //         file: FileData.file
    //     });

    // })
    // /// attack data 
    // attack.create({
    //     id: signatureData.attack.id,
    //     name: signatureData.attack.name
    // });
// console.log(signatureData.external_references,'not working');
//     // ///feach external reference data
    signatureData.external_references.map(externalRef => {
        externalReferences.create({
            type: externalRef.type || null,
            reference: externalRef.reference || null,
            signatureId: signatureDataCreate.id
        });
    })
    // ///feach web server data
    // signatureData.web_servers.map(webServ => {
    //     console.log(webServ.webserver)
    //     webServer.create({
    //         // id: webServ.id,

    //         web: webServ.webserver,
    //         signatureId: signatureDataCreate.id
    //     });
    // })

    // ///feach vuln_data_extras data 
    // signatureData.vuln_data_extras.map(vlunData => {
    //     vulnDataExtra.create({
    //         // id: vlunData.id,
    //         signatureId: signatureDataCreate.id,
    //         description: vlunData.description
    //     });
    // });
    // /// feach parameters data 
    // signatureData.parameters.map(params => {
    //     param.create({
    //         // id: params.id,
    //         parameter: params.parameter,
    //         signatureId: signatureDataCreate.id,
    //     });
    // });

} catch (error) {
  throw new Error(`Cant create signatures: ${error.message}`);
}

}
// With parser
import_XML_Signature = async () => {
  dirname = '../radware-server/vuln-example-signatures.xml';
  let userId = await roles_users.findOne({
    attributes: ['user_id'],
   where: {role_id: 2},
   
});
userId = userId.dataValues.user_id;

  fs.readFile(dirname, function (err, data) {
    const signaturesToImport = JSON.parse(convert.xml2json(data, { compact: false, spaces: 4 }));
    signaturesToImport.elements[1].elements.map(signature => {
      
          try{       
            let typeOfData;
            if (signature.name === 'VulnEx') {typeOfData='vuln_ex'};
            if (signature.name === 'Vuln') {typeOfData='vuln'};
            if (signature.name === 'VulnRegEx') {typeOfData='vuln_reg_ex'};


        let signatureOfXml = {user_id: userId, attack_id: null, type: typeOfData,creation_time: new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: "numeric",
          minute: "numeric"
      }), creation_date: new Date(), status: 'published' };
        let signatureCopy = {};
        signature.elements.map(element => {
          try{
          Object.assign(signatureOfXml, {
            [element.name]: element.elements[0].text || null,
          });
         Object.assign(signatureCopy, {
            [element.name]: element.elements || null,
          });
        }catch{err => console.log(err);}
          

        })

        
        let fragments = signature.elements[1].elements[0].elements;
      
        
         fragments.map(element => {
          //  console.log(element.name);
          //  console.log(element.elements);
           let data = element.elements || null;
           try{
           Object.assign(signatureOfXml, {
            [element.name]: data[0].text
          });
        }catch{err => console.log(err);}
         });
        console.log(signatureOfXml);
        console.log(signatureOfXml.RelatedInfo);
        // 
        // if(signatureOfXml.RelatedInfo.typeOf === 'array'){
          let externalReferences = [];

          try{
          signatureCopy.RelatedInfo.map(refer => {
            // console.log(refer.elements[0].text);
            let reference = refer.elements[0].text.split('=');
            externalReferences.push({type: reference[0], reference: reference[1]});
  
          })
          console.log(externalReferences, 'hello');
        }catch{          console.log(externalReferences, ' error');
      }
        //}
        try{
          Object.assign(signatureOfXml, {
            external_references: externalReferences
         });
       }catch{err => console.log("assign reference doesn't work");}
        try{
          Object.assign(signatureOfXml, {
            VulnData: signatureOfXml.VulnDataEx
         });
       }catch{err => console.log(err);}
        

        addSignatureToDataTable(signatureOfXml);
      
      }catch{console.log(signature.name);}
    });


  });
}




importSignatures = async () => {
  const result = await import_XML_Signature();
}

module.exports = { importSignatures }



