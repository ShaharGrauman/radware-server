var express = require('express');
var router = express.Router();
var AdminController = require('../controllers/admin');


router.get('/roles', async (req, res) => {
  try{
    const roles = await AdminController.findAll();
    res.status(200).json(roles);
  }catch(error){
    res.status(500).json({msg: error.message});
  }
});


module.exports = router;
