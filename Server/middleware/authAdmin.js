 const admin = (req, res, next) => {
     console.log('req.cookies.name')
    const cookie = req.cookies['radware-auth'];
    console.log(cookie)
    if (!cookie || cookie.roles.indexOf(role => role.id == 1) == -1) {
        res.status(401).json({ msg: 'Not Authorized' });
        return;
    }

    next();
}

module.exports = {admin};
