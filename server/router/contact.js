const express = require('express');
const router = new express.Router();
const { sendContactEmail, sendTruckEmail, sendQuoteEmail } = require('../email/email');


// Possibly put */api for D.R.Y

router.post('/contact/api', async (req, res) => {
    sendContactEmail(req.body);
    res.send(req.body);
});

router.post('/truck/api', async (req, res) => {
    sendTruckEmail(req.body);
    res.send(req.body);
});

router.post('/quote/api', async (req, res) => {
    sendQuoteEmail(req.body);
    res.send(req.body);
});

module.exports = router;