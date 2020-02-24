var express = require('express');
const Cookies = require('js-cookie');

var loginController = require('../controllers/login');

var router = express.Router();

router.post('/', async (req, res) => {
    try {
        const logedin = await loginController.Login(req.body);
        res.cookie('radware', JSON.stringify(logedin), { maxAge: 1000 * 60 * 60 * 24 * 7 });
        res.json(logedin);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


router.post('/resetPassword', async (req, res) => {
    try {
        const resetPwd = await loginController.reset(req.body.username, req.userId);
        res.status(200).json('reset email was sent to ' + resetPwd);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

router.put('/resetPassword', async (req, res) => {
    try {
        const resetPwd = await loginController.updatePassword(req.body);
        res.status(200).json('New password was updated successfuly');
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

module.exports = router;