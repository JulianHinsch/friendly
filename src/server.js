require('dotenv').config();
const path = require('path');
const Express = require('express');

const app = new Express();

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.get('/', (req,res) => res.render('landing.ejs'));
app.get('/login', (req,res) => res.render('login.ejs'));
app.get('/signup', (req,res) => res.render('signup.ejs'));

// start the server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Listening on', port);
});