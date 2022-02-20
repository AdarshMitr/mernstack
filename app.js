const mongoose= require('mongoose');
const express= require('express');
const app = express();

const DB = 'mongodb+srv://patel:lymF2zFg6mqZiySw@cluster0.d1eos.mongodb.net/mernstack?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
    
}).then(() => {
    console.log('connection successful');
}).catch((error) => console.log('no connection'));

//middleware

const middleware= (req,res, next) => {
    console.log('Hello my middleware');
    next();
}

app.get('/',(req, res)=> {
res.send('Hello world from the server');
});

app.get('/about',middleware, (req, res)=> {
    console.log('Hello my About');
    res.send('Hello About world from the server');
    });

 app.get('/contact',(req, res)=> {
        res.send('Hello Contact world from the server');
        });

app.get('/signin',(req, res)=> {
            res.send('Hello Login  world from the server');
            });

app.get('/signup',(req, res)=> {
                res.send('Hello Registration world from the server');
                });

app.listen (3000, () =>{
    console.log('server is running at port no 3000');
})