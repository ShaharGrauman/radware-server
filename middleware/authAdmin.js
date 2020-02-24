const admin = (req, res, next) => {
    const cookie = req.headers['radware'];
    if (cookie) {
        const user = JSON.parse(cookie);
        if (user.roles.some(role => role.id == 1)) {
            req.userId = user.id;
            next();
            return;
        }
    }
    res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = { admin };
