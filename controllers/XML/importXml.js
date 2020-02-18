var fs = require('fs');


const { findById } = require('../../controllers/signature');
var SignatureController = require('../../controllers/signature');
var convert = require('xml-js');

// With parser
import_XML_Vuln_Signature = async () => {
  dirname = 'C:/Users/user02/Desktop/radware_project/radware-server/vuln-example-signatures.xml';
  fs.readFile(dirname, function (err, data) {
    const signaturesToImport = JSON.parse(convert.xml2json(data, { compact: false, spaces: 4 }));
    signaturesToImport.elements[1].elements.map(signature => {
      // console.log(signature);
      if (signature.name === 'VulnEx') {
        let signatureOfXml = {user_id: 1, type: signature.name,creation_time: new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: "numeric",
          minute: "numeric"
      }), creation_date: new Date(), status: 'published' };
 
        signature.elements.map(element => {
          Object.assign(signatureOfXml, {
            [element.name]: element.elements || null,
          });
          let key =[element.name];
          signatureOfXml.key = element.elements;

        })
        
        let fragments = signature.elements[1].elements[0].elements;
      
        
         fragments.map(element => {
          //  console.log(element.name);
          //  console.log(element.elements);
           let data = element.elements || null;
           Object.assign(signatureOfXml, {
            [element.name]: data
          });
         });
        console.log(signatureOfXml);

        if(signatureOfXml.RelatedInfo != null){
          let externalReferences = [];
          signatureOfXml.RelatedInfo.map(refer => {
            // console.log(refer.elements[0].text);
            let reference = refer.elements[0].text.split('=');
            externalReferences.push({type: reference[0], reference: reference[1]});
          

          })
          console.log(externalReferences);
        }
        // signature.elements.map(element => {
        //   console.log(element.name);
        //   console.log(element.elements);

        // });

      }
    });


  });
}




routeByType = async () => {
  const result = await import_XML_Vuln_Signature();
}

module.exports = { routeByType }



