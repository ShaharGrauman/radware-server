var fs = require('fs');



exportTestData = signatureData => {
    let stringData = '';
    signatureData.map(data => {
        stringData += data.test_data + '\r\n'
    })
    fs.writeFileSync('testData.txt', stringData);
}

