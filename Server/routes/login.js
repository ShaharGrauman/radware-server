var express = require('express');
const Cookies = require('js-cookie');

var loginController = require('../controllers/login');

var router = express.Router();

router.post('/', async (req, res) => {
    try {
        const logedin = await loginController.Login(req.body);
        //add the user to cookie
        // const user = { id: 1, name: 'Saeed', roles: [{ id: 1, name: 'admin' }] };
        // Cookies.set('radware', logedin, { expires: 1000 * 60 * 60 * 24 * 7 })
        res.cookie('radware', JSON.stringify(logedin), { maxAge: 1000 * 60 * 60 * 24 * 7 });
        console.log(req.cookies.radware)
        res.json(logedin);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


router.post('/resetPassword', async (req, res) => {
    try {
        const resetPwd = await loginController.reset(req.body.username);
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