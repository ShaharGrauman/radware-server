var express = require('express');
var constantController = require('../controllers/constant');
var router = express.Router();

router.get('/', async (req, res) => {
    try {
      const constant = await constantController.getconstants();
      res.status(200).json(constant);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });

module.exports = router;
