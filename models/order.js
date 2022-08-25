const mongoose= require('mongoose');

const orderSchema= new mongoose.Schema({
    customerid:{
        type:String,
        required:true
    },
    inventoryid:{
        type:String,
        required:true
    },
    itemname:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderModel=mongoose.model('order',orderSchema);
module.exports =orderModel;