const joi = require('joi')

const schema = {
    username : joi.string().min(5).max(20).required().error(new Error('username属性没有通过验证')),
    birth : joi.number().min(1900).max(2020).error(new Error('birth没有通过验证'))
}



async function run () {
    try{
        await joi.validate({username : 'abasdda', birth : 1800}, schema)
    }catch(e) {
        console.log(e.message)
        return
    }
    console.log('验证通过')
}

run()