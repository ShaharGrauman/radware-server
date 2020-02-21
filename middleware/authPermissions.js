const authPermissions = (...permissions) => (req, res, next) => {

    const cookie = req.headers['radware'];

    if (cookie) {
        const user = JSON.parse(cookie);
        if (user.roles[0].permissions.some(per => permissions.includes(per.id))) {
            next();
            return;
        }
    }
    res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = authPermissions;


