const express=require('express')

const customerModel=require("./models/customer")

const path=require("path")

const router= express.Router()



router.get("/", (req, res)=> {
    customerModel.find().then((itemData)=> {
        res.render('showcustomer',{customers:itemData})
    });
});



router.get("/add", (req, res)=> {
    res.sendFile(path.join(__dirname + "/views/addcustomer.html"))
});

router.post("/add", async (req, res)=> {
    customerModel.create({
        customerid:req.body.customerid,
        customername:req.body.customername,
        email:req.body.email
        
    }).then(()=> {
        res.send('item added sucessfully')
    }).catch((err)=>{
        res.send(err.message)
    })
    
});

module.exports=router