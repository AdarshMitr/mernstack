const mongoose= require('mongoose');
const DB = process.env.MONGODB_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
}).then(() => {
    console.log('connection successful');
}).catch((error) => {
    console.error('Mongodb connection error:', error);
});