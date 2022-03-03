const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy.

app.use(require('./router/auth'));

const PORT = process.env.PORT;

//middleware

const middleware = (req, res, next) => {
    console.log('Hello my middleware');
    next();
}

app.get('/', (req, res) => {
    res.send('Hello world from the server');
});

app.get('/about', middleware, (req, res) => {
    console.log('Hello my About');
    res.send('Hello About world from the server');
});

app.get('/contact', (req, res) => {
    res.send('Hello Contact world from the server');
});

app.get('/signin', (req, res) => {
    res.send('Hello Login  world from the server');
});

app.get('/signup', (req, res) => {
    res.send('Hello Registration world from the server');
});

app.listen(3000, () => {
    console.log(`server is running at port no ${PORT}`);
});