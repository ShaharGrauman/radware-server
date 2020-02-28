var express = require('express');
const Cookies = require('js-cookie');
const {RadwareError} = require('../models/Errors');
var loginController = require('../controllers/login');

var router = express.Router();

router.post('/', async (req, res) => {
    try {
        const logedin = await loginController.Login(req.body);
        res.cookie('radware', JSON.stringify(logedin), { maxAge: 1000 * 60 * 60 * 24 * 7 });
        res.json(logedin);
    } catch (error) {
        if(error instanceof RadwareError){
            res.status(200).json(error.createJSON());
            return;
          }
          res.status(500).json(error(error.message));
    }
});


router.post('/resetPassword', async (req, res) => {
    try {
        const resetPwd = await loginController.reset(req.body.username, req.userId);
        res.status(200).json(resetPwd);
    } catch (error) {
        if(error instanceof RadwareError){
            res.status(200).json(error.createJSON());
            return;
          }
          res.status(500).json(error(error.message));
    }
});

router.put('/resetPassword', async (req, res) => {
    try {
        const resetPwd = await loginController.updatePassword(req.body);
        res.status(200).json('New password was updated successfuly');
    } catch (error) {
        if(error instanceof RadwareError){
            res.status(200).json(error.createJSON());
            return;
          }
          res.status(500).json(error(error.message));
    }
});

module.exports = router;