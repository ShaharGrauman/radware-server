var express = require('express');
var loginController = require('../controllers/login');

var router = express.Router();


router.post('/', async (req, res) => {
    try {
        const logedin = await loginController.Login(req.body);
        res.json(logedin);
        res.json()
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})

module.exports = router;