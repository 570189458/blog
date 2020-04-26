const guard = (req, res, next)=>{
    //拦截请求判断用户登陆状态
    //判断用户访问的是否是登陆页面
    //判断用户登陆状态
    //如果是登陆状态请求放行
    //如果不是 返回登陆界面
    if(req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login')
    }else {
        next()
    }
}

module.exports = guard