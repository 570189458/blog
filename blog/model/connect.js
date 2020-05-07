const mongoose = require('mongoose')
const config = require('config')
mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log('db on')
    })
    .catch((err)=>{
        console.log('db fail')
        console.log(err)
    })