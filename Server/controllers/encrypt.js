const crypto = require('crypto');



function encrypt(password) {
    const encryptedPassword = crypto.pbkdf2Sync(password, 'radware', 100000, 64, 'sha512');
    return encryptedPassword.toString('base64');
}


module.exports = { encrypt };