const express = require('express')
const admin = express.Router()
const { User } = require('../model/user')
const bcrypt = require('bcrypt')

admin.get('/login', (req, res)=>{
    res.render('admin/login')
})

admin.post('/login', async (req, res)=>{
    // 接受请求参数
    const {email, password} = req.body
    if(email.trim().length == 0 || password.trim().length == 0) return res.status(400).render('admin/error', {msg : '邮件地址或密码错误'})
    //异步获取用户信息
    let user = await User.findOne({email})
    
    if(user){
        let right = await bcrypt.compare(password, user.password)
        if(right){
            req.username = user.username
            res.send('登陆成功')

        }else{
            res.status(400).render('admin/error', {msg : '密码错误'})
        }
    }else{
        res.status(400).render('admin/error', {msg : '邮箱地址或密码错误'})
    }
})

admin.get('/user', (req, res)=>{
    res.render('admin/user', {
        msg : req.username
    })
})

module.exports = admin