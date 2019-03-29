const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const sendContactEmail = (contact) => {
    console.log(contact);
    sgMail.send({
        to: 'tylermok@outlook.com',
        from: 'website@freightdispatch.com',
        subject: 'CONTACT REQUEST!',
        text: `\n\ Name: ${contact.name}\n\ Email: ${contact.email} \n\ Company: ${contact.company} \n\ Phone: ${contact.phone} \n\ ${contact.message}`
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
        text: `\n\ Name: ${quote.name} \n\ Company ${quote.company} \n\ Email: ${quote.email} \n\ Phone: ${quote.phone} \n\ Pick up: ${quote.pickupCity}, ${quote.pickupState} \n\ Deliver: ${quote.deliveryCity}, ${quote.deliveryState}`
    });
};

module.exports = {
    sendContactEmail,
    sendTruckEmail,
    sendQuoteEmail
};