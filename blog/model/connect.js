const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://lxm:lxm@localhost:27017/blog', { useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log('db on')
    })
    .catch((err)=>{
        console.log('db fail')
        console.log(err)
    })