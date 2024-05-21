require('dotenv').config();
const express =require('express');
const mongoose =require('mongoose');
const routes= require('./routes/routing');
const app = express();
const mongoString = process.env.dataBaseUrl;
   
app.listen(3000, () => {
    console.log("server started at localhost:3000")})

app.use(express.json());
app.use('/api',routes);  
mongoose.connect(mongoString);
const database = mongoose.connection; 
database.on('error', (err) => console.log(err));
database.on('connected', () => console.log('Database Connected'));
   
 