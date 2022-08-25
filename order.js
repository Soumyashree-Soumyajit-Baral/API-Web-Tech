
const express=require('express')
const orderModel=require('./models/order')
const customerModel=require("./models/customer")
const invModel=require("./models/inventorytable")
const path=require("path")

const router= express.Router()

router.get("/", (req, res)=> {
    orderModel.find().then((itemData)=> {
        res.render('showorders',{orders:itemData})
    });
});

router.get("/add", (req, res)=> {
    res.sendFile(path.join(__dirname + "/views/placeorder.html"))
});

router.post("/placeorder", async (req, res)=> {
    const qcount=req.body.quantity;
    const user=await customerModel.find({email:req.body.email});
    const c_id=user[0].customerid;
    invModel.find({itemname:req.body.itemname}).then((invData)=>{
        if(invData.length){
            var inv_id=invData[0].inventoryid;
            var count=invData[0].availablequantity;
            var acount=count-qcount;
            if(qcount<count){
                orderModel.create({
                    customerid:c_id,
                    inventoryid:inv_id,
                    itemname:req.body.itemname,
                    quantity:req.body.quantity
                }).then(async ()=>{
                    await invModel.updateOne({itemname:req.body.itemname},{$set:{availablequantity:acount}})
                    res.send("order placed sucessfully")

                }).catch((err)=>{
                    res.send(err.message)
                })
            }else{
                res.send("out of stock")
            }
        }else{
            res.send("Item not available")
        }
    })
    
});

module.exports=router