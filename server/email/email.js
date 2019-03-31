const sgMail = require('@sendgrid/mail');
const key = require('../../api');

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

    

    sgMail.send({
        to: 'tylermok@outlook.com',
        from: 'website@freightdispatch.com',
        subject: 'TRUCK SETUP PACKET!',
        text: 'test',
        attachments: [
            {
              content: truck.signedContract,
              filename: 'signed-contract.jpg',
              type: 'image/jpg',
              disposition: 'attachment',
              contentId: 'signed-contract'
            },
            {
                content: truck.namedInsurance,
                filename: 'named-insurance.jpg',
                type: 'image/jpg',
                disposition: 'attachment',
                contentId: 'named-insurance'
            },
            {
                content: truck.w9,
                filename: 'w9.jpg',
                type: 'image/jpg',
                disposition: 'attachment',
                contentId: 'w9'
            }
        ]
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