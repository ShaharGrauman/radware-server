var express = require('express');
var pwdController = require('../controllers/pwd');
var router = express.Router();


router.post('/reset', async (req, res) => {
    try {
        const resetPwd = await pwdController.reset(req.body.username);
        res.status(200).json('reset email was sent to ' + resetPwd);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})

module.exports = router;