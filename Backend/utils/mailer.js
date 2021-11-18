const mailer = require('nodemailer');

const mailTransport = mailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    }
);

const mailerSender = (to, subject, body)=>{
    const mailOptions = {
        "from": 'process.env.MAIL_USER',
        "to": to,
        "subject": subject,
        "text": body
    }

    mailTransport.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err);
        }else{
            console.log("ENVIADO");
        }
    });
}

module.exports = mailerSender;