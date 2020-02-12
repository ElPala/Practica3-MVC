const mongoose = require('mongoose');

const URL =  require('../config/config.js').dbUrl; 
console.log(URL);
mongoose.connect(URL, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true
}).then(()=>{
 console.log("Connected to database");
}).catch((err)=>{
 console.log("Not connected to database", err);
});
module.exports = mongoose;