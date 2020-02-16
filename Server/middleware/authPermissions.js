const authPermissions = (...permissions) => (req, res, next) => {

    const cookie = req.headers['radware'];
    console.log('cookieeee',cookie);
    // console.log('parse JSON',JSON.parse(cookie))
    // console.log(JSON.parse(cookie).id)

    if (cookie) {
        console.log(cookie);
        const user = JSON.parse(cookie);
        console.log(user);
        console.log('permissions',user.roles[0].permissions)
        // if(user.roles.map(role=>{
        //     role.permissions.some(per=>per.includes(permissions.id))
        // }));
        if (user.roles[0].permissions.some(per => permissions.includes(per.id))) {
            next();
            return;
        }
    }
    res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = authPermissions;


