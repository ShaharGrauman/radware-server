const nodemailer = require('nodemailer');

sendMail = body => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'radware.test.mail01@gmail.com', // generated ethereal user
            pass: 'radware123'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'radware.test.mail01@gmail.com', // sender address
        to: 'radware.test.mail02@gmail.com', // list of receivers
        subject: 'Radware-SignatureManage', // Subject line
        text: 'Hello world?', // plain text body
        // html: `<h1>Hello ${req.body.name} Node Send Mails</h1>` // html body
        html: body // html body

    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('email sent!!');
            // res.json({ msg: 'Email has been sent' });
        }
    });
}


sendEmail = (to, body) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'radware.test.mail01@gmail.com', // generated ethereal user
            pass: 'radware123'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'radware.test.mail01@gmail.com', // sender address
        to: to, // list of receivers
        subject: 'Reset Password', // Subject line
        html: body // html body

    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('email sent!!');
            // res.json({ msg: 'Email has been sent' });
        }
    });
}

module.exports = { sendMail, sendEmail };
