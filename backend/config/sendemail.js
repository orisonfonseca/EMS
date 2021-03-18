var nodemailer = require('nodemailer');

function sendResetLink(email, id) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'orisonfonseca@gmail.com',
          pass: 'Powerfactor11'
        }
      });
      
      var mailOptions = {
        from: 'orisonfonseca@gmail.com',
        to: [email],
        subject: 'Reset Password',
        text: `To reset your password, please click on this link: http://localhost:3000/reset/${id}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}


module.exports = sendResetLink;