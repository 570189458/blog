const { User } = require('../../model/user')

module.exports = async (req, res) =>{
    const { message, id } = req.query

    if(id) {
        //修改用户
        let user = await User.findOne({ _id : id })
        
        res.render('admin/user-edit', {
            message : message,
            user : user,
            link : '/admin/user-modify?id=' + id,
            button : '修改'
        })
    }else {
        //添加用户
        res.render('admin/user-edit', {
            message : message,
            link : '/admin/user-edit',
            button : '添加'
        })
    }

    
}