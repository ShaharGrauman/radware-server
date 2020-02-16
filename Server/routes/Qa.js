var express = require('express');
var router = express.Router();
var QaController = require('../controllers/Qa');
const authRoles = require('../middleware/authRoles');


/// to use this route should to be the user role is 4 or 5 or 6  QA (Manual,performance,automation) 
router.get('/dashboard', authRoles(4, 5, 6), async (req, res) => {
  try {
    const inQa = await QaController.findAll();
    res.status(200).json(inQa);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


/// to use this route should to be the user role is 4 or 5 or 6  QA (Manual,performance,automation) ***need to add permissions***
router.put('/dashboard', authRoles(4, 5, 6), async (req, res) => {
  try {
    const result = await QaController.Update(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
})

module.exports = router;
