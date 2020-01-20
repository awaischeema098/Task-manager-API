
require('dotenv').config()
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASSWORD
    }
})
const sendWelcomeEmail = (email, name)=>{
    transporter.sendMail({
        to: email,
        from: process.env.EMAIL,
        subject: 'This is my first creation!',
        text: `I hope this, ${name} one actually get to you.`
    })
}
const sendGoodbayEmail = (email, name)=>{
    transporter.sendMail({
        to: email,
        from: 'cheemadeveloper098@gmail.com',
        subject: 'Goodbay',
        text: 'We are sad because your not more with us'
    })
}


module.exports = {
    sendWelcomeEmail,
    sendGoodbayEmail
}