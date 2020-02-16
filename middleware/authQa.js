const Qa = (req, res, next) => {
    console.log('req.headers.name')
    console.log(req.headers)
    const cookie = req.headers['radware-auth'];
    if (cookie) {
        const user = JSON.parse(cookie);
        if (user.roles.some(role => role.id == 4 || role.id == 5 || role.id == 6)) {
            next();
            return;
        }
    }
    res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = { Qa };
