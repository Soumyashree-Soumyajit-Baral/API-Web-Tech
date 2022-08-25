
const express= require('express');
const mongoose= require('mongoose');
const ejs=require('ejs')
const invController=require('./inventory')
const customerController=require('./customer')
const orderController=require("./order")
const app = express()


app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('server started')
    }
});


mongoose.connect('mongodb://localhost/api_web_tech_assignment',()=>{
    console.log('connect to db');
},(err)=>{
    console.log(err);
})







//middlewares
app.use('/items',invController)
app.use('/customer',customerController)
app.use('/orders',orderController)