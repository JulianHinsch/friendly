require('dotenv').config();
const Express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const router = require('./routes');
const database = require('./model/database');

const app = new Express();

if(process.env.NODE_ENV === 'development') {
    app.use(cors({
        credentials: true,
        origin: 'http://localhost:3000',
    }));
}

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use(cookieParser()); //you can provide a secret here to sign cookies if you wish

//routes
app.use(router);

// serve static assets in production
if(process.env.NODE_ENV !== 'development') {
    app.use(Express.static(path.join(__dirname, 'src/client/build')));    
}

// general error handling
const handleErrors = (err, req, res, next) => {
    if(err) {
        console.log(err);
        res.sendStatus(err.status);
        res.sendStatus(500);
    }
    next(err);
}

app.use(handleErrors);

// start the server
const port = process.env.PORT || 3001;

if(process.env.NODE_ENV === 'development') {
    database.seed();
} else {
    database.sync();
}

app.listen(port, () => {
    console.log('Listening on', port);
});