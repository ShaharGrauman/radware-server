const { users } = require('../models');
require('./sendEmail');
var crypto = require('crypto');

const reset = async (username) => {
    try {
        const user = await users.findOne({
            where: { username: username } //checking if the email address sent by client is present in the db(valid)
        });
        if (user) {
            var tempPwd = Math.random().toString(36).slice(-8);
            await users.update({ password: tempPwd },
                {
                    returning: true, where: { id: user.id }
                }
            );
            sendEmail(user.username, `<h1>Reset Password => temp password: ${tempPwd}</h1>`);
            return user.username;
        }
        else {
            throw new Error('No user found with that email address.')
        }
    } catch (error) {
        throw new Error(`${error.message}`);
    }
}






/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

function saltHashPassword(userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);
    console.log('UserPassword = '+userpassword);
    console.log('Passwordhash = '+passwordData.passwordHash);
    console.log('nSalt = '+passwordData.salt);
}


module.exports = {
    reset
};