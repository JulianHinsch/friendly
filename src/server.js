require('dotenv').config();

const   Express = require('express'),
        morgan = require('morgan'),
        path = require('path'),
        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser'),
        cors = require('cors'),
        expressWs = require('express-ws')

const handleWebSocketRequest = require('./controller/chat');

const database = require('./model/database');

const app = new Express();

if (process.env.NODE_ENV === 'development') {
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
app.use(cookieParser()); // you can provide a secret here to sign cookies if you wish

expressWs(app);

const router = require('./routes');
app.use(router);

if (process.env.NODE_ENV !== 'development') {
    app.use(Express.static(path.join(__dirname, 'src/client/build')));
}

if (process.env.NODE_ENV === 'development') {
    database.seed();
} else {
    database.sync();
}

// general error handling
app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.sendStatus(err.status);
        res.sendStatus(500);
    }
    next(err);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Listening on', port);
});
