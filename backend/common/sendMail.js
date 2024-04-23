const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "akshat@mobrilz.com",
      pass: "uinj kqlk gcyq seio",
    },
  });

// Send email
const sendMailToUser =  async (userId, password)=>{
    // Define email options
    const mailOptions = {
        from: 'akshat@mobrilz.com',
        to: userId,
        subject: 'Welcome to Greeznet as a partner',
        html: `Hope you are doing well your user id is <b> ${userId}</b> and password is <b>${password}</b>`
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error occurred while sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
}

module.exports = {
    sendMailToUser
}