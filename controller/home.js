const HomeService = require('../service/home')

module.exports = {
    index: async(ctx, next) => {
        await ctx.render('home/index', {title: 'yjw欢迎你'})
    },
    home: async(ctx, next) => {
        console.log(ctx.request.query)
        console.log(ctx.request.querystring)
        ctx.response.body = `<h1>home page.</h1>`
    },
    homeParams: async(ctx, next) => {
        console.log(ctx.params)
        ctx.response.body = `<h1>home page /:id/:name</h1>`
    },
    login: async(ctx, next) => {
        await ctx.render('home/login',{
            btnName: 'GoGoGo'
        })
    },
    register: async(ctx, next) => {
        let {name, password} = ctx.request.body
        let res = HomeService.register(name, password)
        if (res.status == '-1') {
            await ctx.render('home/login', res.data)
        } else {
            ctx.state.title = '个人中心'
            await ctx.render('home/success', res.data)
        }
    }
}