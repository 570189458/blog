const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const joi = require('joi')

// 创建用户的集合规则
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 20
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    // admin 管理员
    // normal 用户
    role : {
        type : String,
        required : true
    },
    // 0 为启用 1 为禁用
    state : {
        type : Number,
        default : 0
    }
})

const User = mongoose.model('User', userSchema)

async function createUser() {
    const salt = await bcrypt.genSalt(10)
    const result = await bcrypt.hash('123', salt)
    const user = await User.create({
        username : 'test',
        email : 'test@test.com',
        password : result,
        role : 'admin',
        state : 0
    }).then(()=>{
        console.log('用户创建成功')
    }).catch(()=>{
        console.log('用户创建失败')
    })
}

const validateUser = user =>{
    const schema = {
        username : joi.string().min(5).max(20).required().error(new Error('用户名不符合验证规则')),
        email : joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password : joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        role : joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
        state : joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    }

    return joi.validate(user, schema)
}

module.exports = {
    User,
    validateUser
}

createUser()