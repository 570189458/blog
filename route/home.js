const express = require('express')
const home = express.Router()

home.get('/', (req, res)=>{
    res.send('欢迎,展示页面')
})

module.exports = home