const axios = require('axios');

const sendTruckForm = async (truck) => {

    console.log(truck);

    // In the future combine all send forms and pull /contact from window.location.href and concat /api.

    const response = await axios.post('http://localhost:3000/truck/api', {
        ...truck
    });

    if (!response) {
        return { error: 'Form was not successfully sent.' };
    };
    return { data: 'Form was successfully sent.' };
};

module.exports = sendTruckForm;