var express = require('express');
const fs = require('fs');
var SignatureController = require('../controllers/signature');
const { signatures, files } = require('../models');
const SearchBuilder = require('../controllers/builders/SearchBuilder');
const {admin} = require('../middleware/authAdmin');

var router = express.Router();

router.get('/search', async (req, res, next) => {
    const search = new SearchBuilder();
    if (req.query.attackName) search.setAttackName(req.query.attackName);
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
        const data = await SignatureController.searchSignature(search.build());
        res.json(data);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

});

router.post('/export/xml',admin, async (req, res, next) => {
    if (req.body.id) {
        console.log(req.body.id)
        try {
            const result = await SignatureController.exportFile(req.body.id);
            res.download('xml.xml')
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    else{

    }
})

router.get('/export/xml', async (req, res, next) => {
    if (req.query.exportTo) {
        console.log(req.query.exportTo)
        try {
            const result = await SignatureController.exportAllFile(req.query.exportTo);
         //   res.download('xml.xml')
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    else{

    }
})

/* GET home page. */
router.get('/', async (req, res, next) => {
    try {
        const Signatures = await SignatureController.findAll();
        res.json(Signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


/* GET signatures listing. */
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


//export signatures
router.get('/export', async (req, res, next) => {
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

        console.log(signatures)

        res.status(200).json(signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const Signatures = await SignatureController.findById(req.params.id);
        res.json(Signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


router.post('/', async (req, res, next) => {
    try {
        const result = await SignatureController.create(req.body);
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message });
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const result = await SignatureController.update(req.body, req.params.id);
        res.json({ result, id: req.params.id });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})



router.delete('/:id', async (req, res, next) => {
    try {
        const result = await SignatureController.Delete(req.params.id);
        res.json({ result, id: req.params.id });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})



module.exports = router;