const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

async function createUser() {
    let salt = await bcrypt.genSalt(10)
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

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}

// createUser()