const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

require('./model/connect')

app.use(bodyParser.urlencoded({extended : false}))

app.use(session({
    secret : 'secret key', 
    saveUninitialized : false,
    cookie : {
        maxAge : 24 * 60 * 60 * 1000
    }
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')
app.engine('art', require('express-art-template'))

app.use(express.static(path.join(__dirname, 'public')))

const home = require('./route/home')
const admin = require('./route/admin')

app.use('/admin', require('./middleware/loginGuard'))

app.use('/home', home)
app.use('/admin', admin)

app.use((err, req, res, next)=>{
    const result = JSON.parse(err)
    let params = []
    for (let attr in result) {
        if( attr != path) {
            params.push(attr + '=' + result[attr])
        }
    }
    res.redirect(`${result.path}?${params.join('&')}`)
})

app.listen(80)
console.log('server on')
