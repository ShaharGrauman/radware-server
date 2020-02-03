const Joi = require('@hapi/joi');

const userCreation = Joi.object({
    username: Joi.string().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).email().required()//,


    // password: Joi.string()
    //     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    // repeat_password: Joi.ref('password'),

    // access_token: [
    //     Joi.string(),
    //     Joi.number()
    // ],

    // birth_year: Joi.number()
    //     .integer()
    //     .min(1900)
    //     .max(2013),

    // email: Joi.string()
    //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});

module.exports={userCreation};
// module.exports = {
    
//     user: {
//         accountCreation: Joi.object().keys({
//             username: Joi.string().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).email().required()//,
//            // phone: Joi.string().regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)//,
//             //password: Joi.string().regex(/^[\x20-\x7E]+$/).min(8).max(72).required()
//         }),
//         authentication: Joi.object().keys({
//             username: Joi.string().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).email().required(),
//             password: Joi.string().regex(/^[\x20-\x7E]+$/).min(8).max(72).required()
//         })
//     }//,
//     // signature: {
//     //     create: Joi.object().keys({
          
//     //     }),
//     // },
    
// }