const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog', { useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log('db on')
    })
    .catch(()=>{
        console.log('db fail')
    })