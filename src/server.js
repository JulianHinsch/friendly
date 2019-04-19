require('dotenv').config();
const Express = require('express');
const morgan = require('morgan');
const path = require('path');
// const passport = require('passport');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');


const router = require('./routes').router;
const sync = require('./model/database').sync;

const app = new Express();

// require('./config/passport')(passport);

// app.use(cookieParser());
app.use(morgan('dev'));

// app.use(session({
//     secret: 'ilovescotchscotchyscotchscotch', // session secret
//     resave: true,
//     saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());


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

sync();

app.listen(port, () => {
    console.log('Listening on', port);
});