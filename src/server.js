require('dotenv').config();
const Express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');

const app = new Express();

app.use(morgan);

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'src/client/build')));

app.use(router);

// start the server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Listening on', port);
});