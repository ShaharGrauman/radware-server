var fs = require('fs');
var builder = require('xmlbuilder');

// const { signatures, } = require('../../models');

const { findById } = require('../../controllers/signature');
var SignatureController = require('../../controllers/signature');

routeByType = signatureData => {
    var root = builder.create('Vulnerabilities_Date');
    signatureData.map(data => {
        if (data.type == 'vuln') export_XML_Vuln_Signature(data, root);
        if (data.type == 'vuln_ex') export_XML_VulnEx_Signature(data);
        if (data.type == 'reg_ex') export_XML_VulnRegEx_Signature(data);
    });
}

export_XML_VulnRegEx_Signature = signatureData => {

    var obj = {};


    console.log(signatureData);
    Vuln = root.ele('VulnRegEx');
    Vuln.ele('PatternID', signatureData.pattern_id)
    Fragments = Vuln.ele('Fragments');
    Fragment = Fragments.ele('Fragment');
    VulnData = Fragment.ele('VulnData', signatureData.vuln_data);
    Fragment.ele('VulnData', signatureData.vuln_data)
    Fragment.ele('ScanUri', signatureData.scan_uri);
    Fragment.ele('ScanHeaders', signatureData.scan_header);
    Fragment.ele('ScanBody', signatureData.scan_body);
    Fragment.ele('ScanParameters', signatureData.scan_parameters);
    Fragment.ele('Leftindex', signatureData.left_index);
    Fragment.ele('RightIndex', signatureData.right_index);

    Vuln.ele('Severity', signatureData.severity);
    Vuln.ele('AttackName', signatureData.attack.dataValues.name)
    Vuln.ele('Description', signatureData.description)


    var xml = root.end({ pretty: true });
    path = '../../../Server';
    if (fs.existsSync(path)) {
        fs.appendFileSync('xml.xml', xml);
    } else {
        fs.writeFileSync('xml.xml', xml);
    }


}

export_XML_VulnEx_Signature = signatureData => {

    var obj = {};

    console.log(signatureData);
    Vuln = root.ele('VulnEx');
    Vuln.ele('PatternID', signatureData.pattern_id)
    Fragments = Vuln.ele('Fragments');
    Fragment = Fragments.ele('Fragment');
    VulnDataEx = Fragment.ele('VulnDataEx', signatureData.vuln_data);
    Fragment.ele('KeepOrder', signatureData.keep_order)
    Fragment.ele('VulnData', signatureData.vuln_data)
    Fragment.ele('params', 'PARAM');
    Fragment.ele('Leftindex', signatureData.left_index);
    Fragment.ele('RightIndex', signatureData.right_index);
    Fragment.ele('ScanUri', signatureData.scan_uri);
    Fragment.ele('ScanHeaders', signatureData.scan_header);
    Fragment.ele('ScanBody', signatureData.scan_body);
    Fragment.ele('ScanParameters', signatureData.scan_parameters);
    Vuln.ele('Severity', signatureData.severity);
    Vuln.ele('AttackName', signatureData.attack.dataValues.name)
    Vuln.ele('Description', signatureData.description)
    RelatedInfo = Vuln.ele('RelatedInfo');
    signatureData.external_references.map(ref => {
        RelatedInfo.ele('ExternalReference', ref.reference);

    });
    webServer = Vuln.ele('WebServers')
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

}

export_XML_Vuln_Signature = (signatureData, root) => {

    var obj = {};


    Vuln = root.ele('Vuln');
    Vuln.ele('PatternID', signatureData.pattern_id)
    Fragments = Vuln.ele('Fragments');
    Fragment = Fragments.ele('Fragment');
    VulnData = Fragment.ele('VulnData', signatureData.vuln_data);
    Fragment.ele('params', 'PARAM');
    Fragment.ele('Leftindex', signatureData.left_index);
    Fragment.ele('RightIndex', signatureData.right_index);
    Fragment.ele('ScanUri', signatureData.scan_uri);
    Fragment.ele('ScanHeaders', signatureData.scan_header);
    Fragment.ele('ScanBody', signatureData.scan_body);
    Fragment.ele('ScanParameters', signatureData.scan_parameters);
    Vuln.ele('Severity', signatureData.severity);
    Vuln.ele('AttackName', signatureData.attack.dataValues.name)
    Vuln.ele('Description', signatureData.description)
    RelatedInfo = Vuln.ele('RelatedInfo');
    signatureData.external_references.map(ref => {
        RelatedInfo.ele('ExternalReference', ref.reference);

    });
    webServer = Vuln.ele('WebServers')
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

}


