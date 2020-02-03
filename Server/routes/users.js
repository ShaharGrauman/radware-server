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
  if (!req.body.name ||
    !req.body.username ||
    !req.body.phone ||
    !req.body.password ||
    !req.body.status) {
    res.status(400).json({ msg: "body is not valid" });
  }
  try {
    const result = await userController.createUser(req.body);
    res.status(201).json({ userId: result.id });
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


module.exports = router;
