const transporter = require('../configs/email');

module.exports = (from, to, subject, text) => {
    
    const message = {
        from,
        to,
        subject,
        text
    }

    transporter.sendMail(message);
}