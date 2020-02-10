const admin = (req, res, next) => {
    const cookie = req.cookies['radware-auth'];
    if (!cookie || cookie.roles.indexOf(role => role.id == 1) == -1) {
        res.status(401).json({ msg: 'Not Authorized' });
        return;
    }

    next();
}

module.exports = {admin};