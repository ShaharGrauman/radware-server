var express = require('express');
const fs = require('fs');
var SignatureController = require('../controllers/signature');
const { signatures, files } = require('../models');
const SearchBuilder = require('../controllers/builders/SearchBuilder');
// const { importXml }= require('XML/');
const { researcher } = require('../middleware/authResearcher');
const authRoles = require('../middleware/authRoles');
const authPermissions = require('../middleware/authPermissions');

var router = express.Router();

router.get('/severity', async (req, res, next) => {
    try {
        const Signatures = await SignatureController.sigBySeverity(req.userId);
        res.status(200).json(Signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

// /cveid?year=2010&serial=0001
router.get('/cveid', async (req, res, next) => {

    const year = req.query.year
    const serial = req.query.serial

    query = Object.assign({}, {
        year,
        serial,
    })

    try {
        const result = await SignatureController.sigByReference(query, req.userId);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

});


router.post('/copy/:id', async (req, res, next) => {
    try {
        const result = await SignatureController.copySignature(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


/// [authRoles(1, 2), authPermissions(3)],
/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 3 (search  signature )
router.get('/search', [authRoles(1, 2), authPermissions(3)], async (req, res, next) => {
    const search = new SearchBuilder();
    if (req.query.attackId) search.setAttackId(req.query.attackId);
    if (req.query.description) search.setDescription(req.query.description);
    if (req.query.severity) search.setSeverity(req.query.severity);
    if (req.query.status) search.setStatus(req.query.status);
    if (req.query.vulnerability) search.setVulnerability(req.query.vulnerability);
    if (req.query.scanUri) search.setScanUri(req.query.scanUri);
    if (req.query.scanHeader) search.setScanHeader(req.query.scanHeader);
    if (req.query.scanBody) search.setScanBody(req.query.scanBody);
    if (req.query.scanParameters) search.setScanParameters(req.query.scanParameters);
    if (req.query.scanFile) search.setScanFile(req.query.scanFile);
    if (req.query.reference) search.setReference(req.query.reference);

    try {
        const cookie = req.headers['radware'];
        const user = JSON.parse(cookie)
        const data = await SignatureController.searchSignature(search.build(), user);
        res.json(data);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

});

router.get('/export/text', async (req, res, next) => {
    try {
        const result = await SignatureController.exportAllTestDataFile();
        res.download('testData.txt')
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }


})

router.post('/export/text', async (req, res, next) => {
    // if (req.body.id) {
    try {
        const result = await SignatureController.exportTestDataFile(req.body.id);
        res.download('testData.txt')
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
    // }
    // else{

    // }
})



/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 4 (export  signature )
router.post('/export/xml', [authRoles(1, 2), authPermissions(4)], async (req, res, next) => {
    // if (req.body.id) {
    try {
        const result = await SignatureController.exportFile(req.body.id);
        res.download('xml.xml')
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
    // }
    // else{

    // }
})




/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 4 (export  signature )
router.get('/export/xml', [authRoles(1, 2), authPermissions(4)], async (req, res, next) => {
    if (req.query.exportTo) {
        console.log(req.query.exportTo)
        try {
            const result = await SignatureController.exportAllFile(req.query.exportTo);
            //   res.download('xml.xml')

            res.download('xml.xml')
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    else {

    }
})

/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 1 (researcher dashboard)
router.get('/', async (req, res, next) => {
    try {
        const Signatures = await SignatureController.findAll();
        res.json(Signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
// ************
router.get('/attacks', async (req, res, next) => {
    try {
        const cookie = req.headers['radware']
        const user = JSON.parse(cookie)
        const Signatures = await SignatureController.sigByAttack(user);
        res.json(Signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

router.get('/SignaturePerSeverity', async (req, res, next) => {
    try {
        const cookie = req.headers['radware']
        const user = JSON.parse(cookie)
        const Signatures = await SignatureController.sigPerSeverity(user);
        res.json(Signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 1 (researcher dashboard)
router.get('/researcher', async (req, res, next) => {
    try {
        // ?page=1&size=20&sortby=default=createTime/pattern/description &orderby=asc&status=all
        const page = req.query.page || 1;
        const size = req.query.size || 20;
        let sortBy = req.query.sortby || 'creation_time';
        const orderBy = req.query.orderby || 'asc';
        const status = req.query.status || 'all';
        // *status => all / inProgress / inTest / inQa / published / suspended
        query = Object.assign({}, {
            page,
            size,
            sortBy,
            orderBy,
            status
        });

        const signatures = await SignatureController.loadSignatures(query);
        res.status(200).json(signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 4 (export  signature )
router.get('/export', [authRoles(1, 2), authPermissions(4)], async (req, res, next) => {
    try {
        // ?page=1&size=20&sortby=default=createTime/pattern/description &orderby=asc&exportto={“Git ” , “Testing” , “ QA” }
        const page = req.query.page || 1;
        const size = req.query.size || 20;
        let sortBy = req.query.sortby || 'creation_time';
        const orderBy = req.query.orderby || 'asc';
        const exportTo = req.query.exportto;
        // *status => all / inProgress / inTest / inQa / published / suspended
        query = Object.assign({}, {
            page,
            size,
            sortBy,
            orderBy,
            exportTo
        });

        const signatures = await SignatureController.loadSignaturesToExport(query);

        res.status(200).json(signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 1 (researcher dashboard)
router.get('/:id', [authRoles(1, 2), authPermissions(1)], async (req, res, next) => {
    try {
        const cookie = req.headers['radware']
        const user = JSON.parse(cookie)
        const Signatures = await SignatureController.findById(req.params.id, user);
        res.json(Signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

router.put('/importXml', async (req, res, next) => {
    try { 
        const cookie = req.headers['radware']
        const user = JSON.parse(cookie)
        const result = await SignatureController.importFile(user);
        res.json(result);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 1 (create/update signature)
router.post('/', [authRoles(1, 2), authPermissions(2)], async (req, res, next) => {
    try {
        const result = await SignatureController.create(req.body, req.userId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})

/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 1 (create/update signature)
router.put('/:id', [authRoles(1, 2), authPermissions(2)], async (req, res, next) => {
    try {
        const cookie = req.headers['radware'];
        const user = JSON.parse(cookie)
        const result = await SignatureController.update(req.body, req.params.id, user);
        res.json({ result, id: req.params.id });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})


/// to use this route should to be the user role is 1 or 2 (admin or researcher) and permissions 1 (create/update signature)
router.delete('/:id', [authRoles(1, 2), authPermissions(2)], async (req, res, next) => {
    try {
        const cookie = req.headers['radware'];
        const user = JSON.parse(cookie)
        const result = await SignatureController.Delete(req.params.id, user);
        res.json({ result, id: req.params.id });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})



module.exports = router;