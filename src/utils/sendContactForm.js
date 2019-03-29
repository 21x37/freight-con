const axios = require('axios');

const sendContactForm = async (form) => {

    // In the future combine all send forms and pull /contact from window.location.href and concat /api.

    console.log(form);
    const response = await axios.post('http://localhost:3000/contact/api', {
        ...form
    })
    if (!response) {
        return { error: 'Form was not successfully sent.'}
    };
    return { data: 'Form was sucessfully sent.' }
};

module.exports = sendContactForm;