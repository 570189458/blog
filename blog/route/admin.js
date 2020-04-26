const express = require('express')
const admin = express.Router()


admin.get('/login', require('./admin/loginPage'))

admin.post('/login', require('./admin/login'))

admin.get('/user', require('./admin/userPage'))

admin.get('/logout', require('./admin/logout'))

admin.get('/user-edit', require('./admin/user-edit'))

admin.post('/user-edit', require('./admin/user-edit-fn'))

admin.post('/user-modify', require('./admin/user-modify'))

admin.get('/delete', require('./admin/user-delete'))

module.exports = admin