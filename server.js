require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const checkoutRoute = require('./routes/checkoutRoutes');
const app = express();
const PORT=process.env.PORT
const db=require('./config/mongoose')
const productRoute=require('./routes/productRoutes')
db()

app.use(express.json());

app.use('/checkout', checkoutRoute);
app.use('/product', productRoute);

app.listen(PORT,(err)=>{
    if(err){
        console.log(`Error in server listening :-${err}`);
        return;
    }
    console.log(`Server listening at http://localhost:${PORT}`)
});