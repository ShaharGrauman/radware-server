var express = require('express');
var router = express.Router();
var attackController = require('../controllers/attack');


/* GET home page. */
router.get('/', async (req, res, next) => {
    try {
        const attacks = await attackController.findAll();
        res.json(attacks);
    }catch (error) {
        res.status(500).json({ msg: error.message });
    }
    // attack.findAll().then(attacks=>{
    //     res.json(attacks);
    // })
});

router.post('/', async (req, res, next) => {
    try {
        const attacks = await attackController.create(req.body);
        res.json(attacks);
    }catch (error) {
        res.status(500).json({ msg: error.message });
    }
    // attack.findAll().then(attacks=>{
    //     res.json(attacks);
    // })
});



module.exports = router;