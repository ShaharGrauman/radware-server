var express = require('express');
var loginController = require('../controllers/login');

var router = express.Router();

router.post('/', async (req, res) => {
    try {
        const logedin = await loginController.Login(req.body);
        //add the user to cookie
        const user = {id:1, name:'Saeed', roles:[{id:1, name:'admin'}]};
        res.cookie('radware-auth', user, {maxAge: 1000*60*60*24*7});
        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})

module.exports = router;