
var fs = require('fs');
var builder = require('xmlbuilder');

// const { signatures, } = require('../../models');

const { findById } = require('../../controllers/signature');
var SignatureController = require('../../controllers/signature');


export_XML_VulnRegEx_Signature = id => {

    var obj = {
        VulnRegEx: {
            PatternID: {
                '#text': 'this is the pattern'
            },
            Fragments: {
                Fragment: {
                    VulnData: {
                        '#text': 'Sleep'
                    },
                    ScanUri: {
                        '#text': '1'
                    },
                    ScanHeaders: {
                        '#text': '0'
                    },
                    ScanBody: {
                        '#text': '1'
                    },
                    ScanParameters: {
                        '#text': '1'
                    },
                    LeftIndex: {
                        '#text': '1'
                    },
                    RightIndex: {
                        '#text': '-1'
                    },
                }
            },
            Severity: {
                '#text': 'Medium'
            },
            AttackName: {
                '#text': 'Romote File Inclusion'
            },
            Description: {
                '#text': 'Vuln example 2'
            },
        }
    };

}

export_XML_VulnEx_Signature = dataFile => {

}

export_XML_Vuln_Signature = dataFile => {

    var obj = {};

    dataFile.map(signatureData => {

        var root = builder.create('Vuln');
        root.ele('PatternID', signatureData.pattern_id)
        Fragments = root.ele('Fragments');
        Fragment = Fragments.ele('Fragment');
        VulnData = Fragment.ele('VulnData', signatureData.vuln_data);
        Fragment.ele('params', 'PARAM');
        Fragment.ele('Leftindex', signatureData.left_index);
        Fragment.ele('RightIndex', signatureData.right_index);
        Fragment.ele('ScanUri', signatureData.scan_uri);
        Fragment.ele('ScanHeaders', signatureData.scan_header);
        Fragment.ele('ScanBody', signatureData.scan_body);
        Fragment.ele('ScanParameters', signatureData.scan_parameters);
        root.ele('Severity', signatureData.severity);
        root.ele('AttackName', signatureData.attack.dataValues.name)
        root.ele('Description', signatureData.description)
        RelatedInfo = root.ele('RelatedInfo');
        signatureData.external_references.map(ref => {
            RelatedInfo.ele('ExternalReference', ref.reference);

        });
        webServer = root.ele('WebServers')
        signatureData.web_servers.map(web => {
            webServer.ele('webserver', web.web)
        });
        var xml = root.end({ pretty: true });
        path = '../../../Server';
        if (fs.existsSync(path)) {
            fs.appendFileSync('xml.xml', xml);
        } else {
            fs.writeFileSync('xml.xml', xml);
        }

    });

    // signatureData.web_servers.map(web => {
    // signatureData.parameters.map(param => {
    // signatureData.external_references.map(ref => {


    // obj = {
    //     Vuln: {
    //         PatternID: {
    //             '#text': 'signatureData.pattern_id'
    //         },
    //         Fragments: {
    //             Fragment: {
    //                 VulnData: {
    //                     '@EndBreak': 'FileName',
    //                     '#text': 'signatureData.vuln_data'
    //                 },
    //                 params: {
    //                     '#text': ' param.parameter'
    //                 },
    //                 LeftIndex: {
    //                     '#text': '1'
    //                 },
    //                 RightIndex: {
    //                     '#text': 'signatureData.right_index'
    //                 },
    //                 ScanUri: {
    //                     '#text': 'signatureData.scan_uri'
    //                 },
    //                 ScanHeaders: {
    //                     '#text': 'signatureData.scan_header'
    //                 },
    //                 ScanBody: {
    //                     '#text': 'signatureData.scan_body'
    //                 },
    //                 ScanParameters: {
    //                     '#text': 'signatureData.scan_parameters'
    //                 }
    //             }
    //         },
    //         Severity: {
    //             '#text': 'signatureData.severity'
    //         },
    //         AttackName: {
    //             '#text': 'signatureData.attack.dataValues.name'
    //         },
    //         Description: {
    //             '#text': 'signatureData.description'
    //         },
    //         RelatedInfo: {
    //             ExternalReference: [{
    //                 '#text': 'ref'
    //             }]
    //         },


    //         WebServers: {
    //             '#text': 'web.web'
    //         },
    //     }
    // };
    // });
    // });
    // });


    // var xml = builder.create(obj).end({ pretty: true });
    // fs.writeFileSync('xmll.xml', xml);

    // console.log(dataFile[1].dataValues);

    // console.log(dataFile[1].web_servers[1].dataValues);
    // console.log(dataFile[0].attack.dataValues);
    // console.log(dataFile[0].external_references[0].dataValues);
    // console.log(dataFile[0].dataValues.parameters[0].dataValues);
}





