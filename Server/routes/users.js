var express = require('express');
var userController = require('../controllers/users');

var router = express.Router();
var roleController = require('../controllers/roles');

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await userController.getUserWithRoles();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.post('/new_user', async (req, res, next) => {
  try {
    const result = await userController.createUser(req.body);
    res.status(201).json({ userId: result.id });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log("create user doesn't work from routes");
  }
});

router.put('/delete_user', async (req, res, next) => {
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


router.get('/:id', async (req, res) => {
  try {
    const user = await userController.getUserWithRoles(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


router.put('/:id', async (req, res, next) => {
  try {
    const result = await userController.editUser(req.body, req.params.id);
    res.status(201).json({ userId: req.params.id });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


//constant

// router.get('/roles', async (req, res) => {
//   try {
//     const roles = await roleController.getRoles();
//     res.status(200).json(roles);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

module.exports = router;
