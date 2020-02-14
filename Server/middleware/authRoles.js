const authRoles = (...roles) => (req, res, next) => {

    const cookie = req.headers['radware'];
    // console.log('cookie',cookie);
    // console.log('parse JSON',JSON.parse(cookie))
    // console.log(JSON.parse(cookie).id)

    if (cookie) {
        console.log(cookie);
        const user = JSON.parse(cookie);
        console.log(user);
        if (user.roles.some(role => roles.includes(role.id))) {
            next();
            return;
        }
    }
    res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = authRoles;


