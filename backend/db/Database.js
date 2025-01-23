const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose
    .connect(process.env.DB_URL) //No need for useNewUrlParser or useUnifiedtopology
    .then((data)=>{
        console.log(`Database connection successful:${data.connection.host}`);
    })
    .catch((err)=>{
        console.log(`Database connection failed:${err.message}`);
        process.exit(1); // Exit process to avoid running with an invalid DB connection
    });
}

module.exports = connectDatabase;