const mongoose= require('mongoose');

const inventorySchema= new mongoose.Schema({
    inventoryid:{
        type:String,
        required:true
    },
    inventorytype:{
        type:String,
        required:true
    },
    itemname:{
        type:String,
        required:true
    },
    availablequantity:{
        type:Number,
        required:true
    },
})

const inventoryModel=mongoose.model('inventory',inventorySchema);
module.exports =inventoryModel;