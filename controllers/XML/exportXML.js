var fs = require('fs');
var builder = require('xmlbuilder');

// const { signatures, } = require('../../models');

const { findById } = require('../signature');
var SignatureController = require('../signature');

routeByType = signatureData => {

    var root = builder.create('Vulnerabilities', { encoding: 'utf-8' }, { standalone: "yes" });
    root.att({ Version: "4.5.1.1", Date: new Date().toLocaleDateString() })
    signatureData.map(data => {
        if (data.type == 'vuln') export_XML_Vuln_Signature(data, root);
        if (data.type == 'vuln_ex') export_XML_VulnEx_Signature(data, root);
        if (data.type == 'vuln_reg_ex') export_XML_VulnRegEx_Signature(data, root);
    });
    var xml = root.end({ pretty: true });

    path = '../../../Server';
    if (fs.existsSync(path)) {
        fs.writeFileSync('xml.xml', xml);
    } else {
        fs.writeFileSync('xml.xml', xml);
    }
}

export_XML_VulnRegEx_Signature = (signatureData, root) => {

    var obj = {};

    Vuln = root.ele('VulnRegEx');
    Vuln.ele('PatternID', signatureData.pattern_id)
    Fragments = Vuln.ele('Fragments');
    Fragment = Fragments.ele('Fragment');
    Fragment.ele('VulnData', signatureData.vuln_data)
    Fragment.ele('ScanUri', signatureData.scan_uri ? '1' : '0');
    Fragment.ele('ScanHeaders', signatureData.scan_header ? '1' : '0');
    Fragment.ele('ScanBody', signatureData.scan_body ? '1' : '0');
    Fragment.ele('ScanParameters', signatureData.scan_parameters ? '1' : '0');
    Fragment.ele('Leftindex', signatureData.left_index);
    Fragment.ele('RightIndex', signatureData.right_index);
    Vuln.ele('Severity', signatureData.severity);
    Vuln.ele('AttackName', signatureData.dataValues.attack.name)
    Vuln.ele('Description', signatureData.description)





}

export_XML_VulnEx_Signature = (signatureData, root) => {

    var obj = {};
    Vuln = root.ele('VulnEx');
    Vuln.ele('PatternID', signatureData.pattern_id)
    Fragments = Vuln.ele('Fragments');
    Fragment = Fragments.ele('Fragment');
    signatureData.vuln_data_extras.map(vulnEx=>{
        VulnDataEx = Fragment.ele('VulnDataEx', vulnEx.description);
    })
    Fragment.ele('KeepOrder', signatureData.keep_order ? '1' : '0')
    Fragment.ele('VulnData', signatureData.vuln_data)
    let paramString = signatureData.parameters
        .map(param => param.parameter)
        .join(`&`)
        .concat('&');
    Fragment.ele('params', paramString);
    Fragment.ele('Leftindex', signatureData.left_index);
    Fragment.ele('RightIndex', signatureData.right_index);
    Fragment.ele('ScanUri', signatureData.scan_uri ? '1' : '0');
    Fragment.ele('ScanHeaders', signatureData.scan_header ? '1' : '0');
    Fragment.ele('ScanBody', signatureData.scan_body ? '1' : '0');
    Fragment.ele('ScanParameters', signatureData.scan_parameters ? '1' : '0');
    Vuln.ele('Severity', signatureData.severity);
    Vuln.ele('AttackName', signatureData.dataValues.attack.name)
    Vuln.ele('Description', signatureData.description)
    RelatedInfo = Vuln.ele('RelatedInfo');
    signatureData.external_references.map(ref => {
        RelatedInfo.ele('ExternalReference', ref.type + '=' + ref.reference);

    });
    webServer = Vuln.ele('WebServers')
    signatureData.web_servers.map(web => {
        webServer.ele('webserver', web.web)
    });





}

export_XML_Vuln_Signature = (signatureData, root) => {

    var obj = {};
    
    Vuln = root.ele('Vuln');
    Vuln.ele('PatternID', signatureData.pattern_id)
    Fragments = Vuln.ele('Fragments');
    Fragment = Fragments.ele('Fragment');
    VulnData = Fragment.ele('VulnData', signatureData.vuln_data);
    let paramString = signatureData.parameters
        .map(param => param.parameter)
        .join(`&`)
        .concat('&');
    Fragment.ele('params', paramString);
    Fragment.ele('Leftindex', signatureData.left_index);
    Fragment.ele('RightIndex', signatureData.right_index);
    Fragment.ele('ScanUri', signatureData.scan_uri ? '1' : '0');
    Fragment.ele('ScanHeaders', signatureData.scan_header ? '1' : '0');
    Fragment.ele('ScanBody', signatureData.scan_body ? '1' : '0');
    Fragment.ele('ScanParameters', signatureData.scan_parameters ? '1' : '0');
    Vuln.ele('Severity', signatureData.severity);
    Vuln.ele('AttackName', signatureData.dataValues.attack.name)
    Vuln.ele('Description', signatureData.description)
    RelatedInfo = Vuln.ele('RelatedInfo');
    signatureData.external_references.map(ref => {
        RelatedInfo.ele('ExternalReference', ref.type + '=' + ref.reference);

    });
    webServer = Vuln.ele('WebServers')
    signatureData.web_servers.map(web => {
        webServer.ele('webserver', web.web)
    });





}
