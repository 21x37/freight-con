const sgMail = require('@sendgrid/mail');
const key = require('../../api');
const FileReader = require('filereader');

sgMail.setApiKey(key);

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

    const reader = new global.FileReader();
    console.log(truck.signedContract);

    sgMail.send({
        to: 'tylermok@outlook.com',
        from: 'website@freightdispatch.com',
        subject: 'TRUCK SETUP PACKET!',
        text: 'TRUCK SETUP PACKET MESSAGE',
        html: `<img src='${reader.readAsDataURL(truck.signedContract)}'></img>`
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