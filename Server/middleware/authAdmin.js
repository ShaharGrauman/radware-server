const admin = (req, res, next) => {
    console.log('req.headers.name')
    console.log(req.headers)
    const cookie = req.headers['radware-auth'];
    if (cookie) {
        const user = JSON.parse(cookie);
        if (user.roles.some(role => role.id == 1)) {
            next();
            return;
        }
    }
    res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = { admin };
