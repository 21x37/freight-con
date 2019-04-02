const axios = require('axios');

const sendForm = async (form) => {
    // Fetching /contact or /quote from  https://example.com/quote for api call
    const page = window.location.href.split('/')[3];

    const response = await axios.post(`http://localhost:3000/${page}/api`, {
        ...form
    });

    if (!response) {
        return { error: 'Form was not sucessfully sent.' };
    };

    return { data: 'Form was sucessfully sent.' };

     // In the future combine all send forms and pull /contact from window.location.href and concat /api.

};

module.exports = sendForm;