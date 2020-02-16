var fs = require('fs');


const { findById } = require('../signature');
var SignatureController = require('../signature');
var convert = require('xml-js');

// With parser
import_XML_Vuln_Signature = async () => {
  dirname = '../Server/vuln-example-signatures.xml';
  fs.readFile(dirname, function(err, data) {
    const signaturesToImport = JSON.parse(convert.xml2json(data, {compact: false, spaces: 4}));
    signaturesToImport.elements[1].elements.map(signature => {
      //  console.log(signature);
       if(signature.name === 'VulnEx'){
         
        //  signature.elements.map(element => {
        //    console.log(element.name);
        //    console.log(element.elements);

        //  });
       }
    });
   
    
  });
}



routeByType = async () => {
   const result = await import_XML_Vuln_Signature();
}

module.exports = {routeByType}



