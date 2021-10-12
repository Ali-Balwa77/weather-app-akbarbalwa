const express = require('express');
const router = new express.Router(); 

router.get('',(req,res)=>{
    res.render('index');
})
router.get('/weather',(req,res)=>{
    res.render('weather');
})
router.get('*',(req,res)=>{
    res.render('404error',{
        errorMsg: 'Oops! Page Not Found'
    });
})
 module.exports = router