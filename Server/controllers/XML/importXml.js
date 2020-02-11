var fs = require('fs');
var xml2js = require('xml2js');

// const { signatures, } = require('../../models');

const { findById } = require('../../controllers/signature');
var SignatureController = require('../../controllers/signature');

dirname = '../../vuln-example-signatures'

// With parser
var parser = new xml2js.Parser();
fs.readFile(dirname, function(err, data) {
parser.parseStringPromise(data).then(function (result) {
  console.dir(result);
  console.log('Done');
})
.catch(function (err) {
  // Failed
});
});

routeByType = signatureData => {
    signatureData.map(data => {
        if (data.type == 'vuln') import_XML_Vuln_Signature(data, root);
        if (data.type == 'vuln_ex') import_XML_VulnEx_Signature(data);
        if (data.type == 'reg_ex') import_XML_VulnRegEx_Signature(data);
    });
}





