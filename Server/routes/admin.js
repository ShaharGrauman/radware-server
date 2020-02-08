var express = require('express');
var router = express.Router();
var RolesController = require('../controllers/roles');
const {admin} = require('../middleware/authAdmin');

router.get('/roles', admin, async (req, res) => {
  try {
    console.log(req.cookies)
    const roles = await RolesController.getRoleWithPermissions();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


module.exports = router;
