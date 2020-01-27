var express = require('express');
var SignatureController = require('../controllers/signature');
const { signatures, files } = require('../models');

var router = express.Router();


/* GET home page. */
router.get('/', async (req, res, next) => {
    try {
        const Signatures = await SignatureController.findAll();
        res.json(Signatures);
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