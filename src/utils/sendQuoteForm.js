const axios = require('axios');

const sendQuoteForm = async (form) => {

     // In the future combine all send forms and pull /contact from window.location.href and concat /api.

    const response = await axios.post('http://localhost:3000/quote/api', {
        ...form
    });

    if (!response) {
        return { error: 'Form was not sucessfully sent.' };
    };

    return { data: 'Form was sucessfully sent.' };
};

module.exports = sendQuoteForm;