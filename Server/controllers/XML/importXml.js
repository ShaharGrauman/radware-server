var fs = require('fs');


const { findById } = require('../../controllers/signature');
var SignatureController = require('../../controllers/signature');
var convert = require('xml-js');

// With parser
import_XML_Vuln_Signature = async () => {
  dirname = '../Server/vuln-example-signatures.xml';
  let colElement= {};
  fs.readFile(dirname, function(err, data) {
    const result = JSON.parse(convert.xml2json(data, {compact: false, spaces: 4}));
    console.log(result.elements[1].elements[1].elements[0].elements[0].text);
    name = result.elements[1].elements[1].name;
    result.elements[1].elements[1].elements.map((element) => {
      Object.assign(colElement, {
        [element.name]: element.elements
    });
    console.log(element.elements);
    });
    console.log(colElement);
    // propertyName = result.elements[1].elements[1].elements[0].name;
    // propertyValue = result.elements[1].elements[1].elements[0].elements[0].text;
    
  });
}



routeByType = async () => {
   const result = await import_XML_Vuln_Signature();
}

module.exports = {routeByType}



