var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');
var roleController = require('../controllers/roles');
const {admin} = require('../middleware/authAdmin');



router.get('/roles', async (req , res) => {
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  try {
    const roles = await roleController.getRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
/* GET users listing. */
router.get('/',admin, async (req, res) => {
  try {
    const users = await userController.getUserWithRoles();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
/// to use this route should to be the user role is 1  (admin) 
router.post('/new_user',admin, async (req, res, next) => {
  try {
    const result = await userController.createUser(req.body);
    res.status(201).json( result );
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
/// to use this route should to be the user role is 1  (admin) 
router.put('/delete_user',admin, async (req, res, next) => {
  if (!req.body.username) {
    res.status(400).json({ msg: "username is not valid" });
  }
  try {
    const result = await userController.deleteUser(req.body.username);
    res.status(201).json({ msg: 'deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

/// to use this route should to be the user role is 1  (admin) 
router.get('/:id',admin, async (req, res) => {
  try {
    const user = await userController.getUserWithRoles(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

/// to use this route should to be the user role is 1  (admin) 
router.put('/:id',admin, async (req, res, next) => {
  try {
    const result = await userController.editUser(req.body, req.params.id);
    res.status(201).json({ userId: req.params.id });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


//constant


module.exports = router;
