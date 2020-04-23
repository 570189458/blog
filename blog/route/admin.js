const express = require('express')
const admin = express.Router()

admin.get('/login', (req, res)=>{
    res.render('admin/login')
})

admin.post('/login', (req, res)=>{
    // 接受请求参数
    
})

admin.get('/user', (req, res)=>{
    res.render('admin/user')
})

module.exports = admin