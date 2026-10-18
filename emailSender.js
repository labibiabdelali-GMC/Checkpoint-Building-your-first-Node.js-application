const nodemailer = require('nodemailer');

// Replace with your Gmail address and Gmail app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'your-app-password'
  }
});

const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'receiver@example.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
