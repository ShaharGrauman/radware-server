const researcher = (req, res, next) => {

    const cookie = req.headers['radware-auth'];
    if (cookie) {
        const user = JSON.parse(cookie);
        if (user.roles.some(role => role.id == 2)) {
            next();
            return;
        }
    }
    res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = { researcher };


