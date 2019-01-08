require('dotenv').config();
const Express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes').router;
const sync = require('./model/database').sync;

const app = new Express();

app.use(morgan('dev'));

// serve static assets in production
if(process.env.NODE_ENV !== 'development') {
    app.use(Express.static(path.join(__dirname, 'src/client/build')));    
}

app.use(router);

// general error handling
const handleErrors = (err, req, res, next) => {
    if(err) {
        console.log(err);
        res.sendStatus(500);
    }
    next();
}

app.use(handleErrors);

// start the server
const port = process.env.PORT || 3001;

sync();

app.listen(port, () => {
    console.log('Listening on', port);
});