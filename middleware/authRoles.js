const authRoles = (...roles) => (req, res, next) => {

    const cookie = req.headers['radware'];

    if (cookie) {
        const user = JSON.parse(cookie);
        if (user.roles.some(role => roles.includes(role.id))) {
            next();
            return;
        }
    }
    res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = authRoles;


