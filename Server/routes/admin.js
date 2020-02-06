var express = require('express');
var router = express.Router();
var RolesController = require('../controllers/roles');


router.get('/roles', async (req, res) => {
  try{
    const roles = await RolesController.getRoleWithPermissions();
    res.status(200).json(roles);
  }catch(error){
    res.status(500).json({msg: error.message});
  }
});


module.exports = router;
