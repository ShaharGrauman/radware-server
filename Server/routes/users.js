var express = require('express');
var userController = require('../controllers/users');

var router = express.Router();


/* GET users listing. */
router.get('/', async (req, res) => {
  try{
    const users = await userController.findAll();
    res.status(200).json(users);
  }catch(error){
    res.status(500).json({msg: error.message});
  }
});



module.exports = router;
