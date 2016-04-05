'use strict';
var router = require('express').Router();
module.exports = router;
var nodemailer = require('nodemailer');

// router.use('/members', require('./members'));

router.post('/contact', function(req, res){
  console.log(process.env.GMAIL_PASS)
  var smtpTransport = nodemailer.createTransport("SMTP",{
     service: "Gmail",
     auth: {
         user: process.env.GMAIL_USER,
         pass: process.env.GMAIL_PASS
     }
  });
  var data = req.body;
  // console.log('about to send', data);
  smtpTransport.sendMail(req.body, function(error, response){
       if(error){
           // console.log(error);
           return res.send('Error: ' + error.message);
       }else{
           // console.log("Message sent: " + response.message);
           return res.send('Message sent: ' + response.message);
       }
    });
});

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
