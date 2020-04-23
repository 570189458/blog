const express = require('express')
const app = express()
const home = require('./route/home')
const admin = require('./route/admin')
const path = require('path')

require('./model/connect')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')
app.engine('art', require('express-art-template'))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/home', home)
app.use('/admin', admin)

app.listen(80)
console.log('server on')
