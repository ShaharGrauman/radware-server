var express = require('express');
var router = express.Router();
var roleController = require('../controllers/roles');


const {admin} = require('../middleware/authAdmin');

var permissionController = require('../controllers/permissions');

router.get('/permissions', async (req, res) => {
  try{
    const permissions = await permissionController.getPermissions( );
    res.status(200).json(permissions);
  }catch(error){
    res.status(500).json({msg: error.message});
  }
});

router.get('/', async (req, res) => {
  try {
    const roles = await roleController.getRoleWithPermissions();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});



router.post('/new_role',admin, async (req, res, next) => {
  console.log('sss');
  if (!req.body.name || !req.body.description) {
    res.status(400).json({ msg: "body is not valid" });
   }

  try {
    const result = await roleController.createRole(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


router.get('/:id',admin, async (req, res) => {
    try{
      const roles = await roleController.getRoleWithPermissions(req.params.id);
      res.status(200).json(roles);
    }catch(error){
      res.status(500).json({msg: error.message});
    }
  });


  router.put('/:id',admin, async (req, res, next) => {
    try {
      const roles = await roleController.editRole(req.body, req.params.id);
      res.status(201).json({ roleId: req.params.id });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });

  
module.exports = router;
