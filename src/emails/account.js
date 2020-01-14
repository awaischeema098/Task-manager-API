require('dotenv').config()

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'cheemadeveloper098@gmail.com',
        pass : 'Awabshz09817'
    }
})
const sendWelcomeEmail = (email, name)=>{
    transporter.sendMail({
        to: email,
        from: 'cheemadeveloper098@gmail.com',
        subject: 'This is my first creation!',
        text: 'I hope this, ${name} one actually get to you.'
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