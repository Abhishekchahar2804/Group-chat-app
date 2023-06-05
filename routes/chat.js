const express = require('express');
const fs=require('fs');

const router = express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('text.txt',{encoding:'utf-8'},(err,data)=>{
        res.send(`<body>${data}</body><form action="/" method="POST"><input type="text" name="message"></input><button>send</button></form>`)
    })
    })
    

router.post('/',(req,res,next)=>{
    fs.appendFile('text.txt',req.body.message,(err)=>{
        console.log(err);
      res.redirect('/');
    })
})

module.exports=router;