var express = require('express');
var attackController = require('../controllers/attack');

var router = express.Router();


/* GET home page. */
router.get('/', async (req, res, next) => {
    try {
        const attacks = await attackController.findAll();
        res.json(attacks);
    }catch (error) {
        res.status(500).json({ msg: error.message });
    }
  
});

router.post('/', async (req, res, next) => {
    try {
        const attacks = await attackController.create(req.body);
        res.json(attacks);
    }catch (error) {
        res.status(500).json({ msg: error.message });
    }

});



module.exports = router;