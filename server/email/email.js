const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const sendContactEmail = (contact) => {
    console.log(contact);
    sgMail.send({
        to: 'tylermok@outlook.com',
        from: 'website@freightdispatch.com',
        subject: 'CONTACT REQUEST!',
        text: `CONTACT REQUEST MESSAGE`
    });
};

const sendTruckEmail = (truck) => {
    console.log(truck);
    sgMail.send({
        to: 'tylermok@outlook.com',
        from: 'website@freightdispatch.com',
        subject: 'TRUCK SETUP PACKET!',
        text: 'TRUCK SETUP PACKET MESSAGE'
    });
};

const sendQuoteEmail = (quote) => {
    console.log(quote);
    sgMail.send({
        to: 'tylermok@outlook.com',
        from:'website@freightdispatch.com',
        subject: 'QUOTE REQUEST!',
        text: 'QUOTE REQUEST MESSAGE'
    });
};

module.exports = {
    sendContactEmail,
    sendTruckEmail,
    sendQuoteEmail
};