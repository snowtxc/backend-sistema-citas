const sgMail = require('@sendgrid/mail');
const handleFatalError = require('./handleFatalError');

const API_KEY = "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";
sgMail.setApiKey(API_KEY);


var emailService = {
    sendWelcomeMsg: async function (emailTo, usernameTo) {
        const welcomeMsg = {
            to: emailTo,
            from: 'snowitxc@gmail.com', // Use the email address or domain you verified above
            subject: 'Welcome',
            html: '<h1>Bienvenido ' + usernameTo + ' al sistema de gestion de citas y clientes</h1>'
        };    
        
        sgMail
            .send(welcomeMsg)
            .then(() => { }, error => {
                handleFatalError(error);
            });
     }

}

module.exports = emailService;
