const express=require('express')
const invModel=require('./models/inventorytable')
const path=require("path")

const router= express.Router()


router.get("/", (req, res)=> {
    invModel.find().then((itemData)=> {
        // res.render(path.join(`${__dirname}/views/showinv`),{items:itemData})
        res.render('showinv',{items:itemData})
    });
});



router.get("/add", (req, res)=> {
    res.sendFile(path.join(__dirname + "/views/additems.html"))
});

router.post("/add", (req, res)=> {
    invModel.create({
        inventoryid:req.body.inventoryid,
        inventorytype:req.body.inventorytype,
        itemname:req.body.itemname,
        availablequantity:req.body.availablequantity
    }).then(()=> {
        // res.render(path.join(`${__dirname}/views/showinv`),{items:itemData})
        res.send('item added sucessfully')
    }).catch((err)=>{
        res.send(err.message)
    })
});

module.exports=router;