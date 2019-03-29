const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const contactRouter = require('./router/contact');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(contactRouter);

app.get('*', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(publicPath, '/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});