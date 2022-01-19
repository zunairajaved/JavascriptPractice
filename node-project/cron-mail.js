const cron = require('node-cron');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: 'username',
      pass: 'app password'
    }
  });
//   transporter.verify(function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

  cron.schedule('* * * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
  
    let messageOptions = {
      from: 'zunaira0107@gmail.com',
      to: 'zunaira.javed@invozone.com',
      subject: 'Scheduled Email',
      text: 'Hi there. This email was automatically sent by us.'
    };
  
    transporter.sendMail(messageOptions, function(error, info) {
      if (error) {
        console.log( error);
      } else {
        console.log('Email successfully sent!');
      }
    });
  });