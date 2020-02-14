var express = require('express');
var router = express.Router();
var QaController = require('../controllers/Qa');
const { Qa } = require('../middleware/authQa');


router.get('/dashboard', Qa, async (req, res) => {
  try {
    const inQa = await QaController.findAll();
    res.status(200).json(inQa);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.put('/dashboard', async (req, res) => {
  try {
    const result = await QaController.Update(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
})

module.exports = router;
