const Koa = require('koa')
const router = require('koa-router')()// koa-router返回的是一个函数
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser())
router.get('/', async(ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
})

router.get('/home', async(ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = `<h1>home page</h1>`
})

router.get('/home/:id/:name', async(ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = '<h1> Home page /:id/:name </h1>'
})

router.get('/user', async(ctx, next) => {
    ctx.response.body = 
    `
    <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名" />
        <br />
        <input name="password" type="password" placeholder="请输入密码" />
        <br />
        <button></button>
    </form>
    `
})

router.post('/user/register', async(ctx, next) => {
    let {name, password} = ctx.request.body;
    ctx.response.body = `Hello, ${name}/${password}`;
})
router.get('/404', async(ctx, next) => {
    ctx.response.body = `<h1>404 Not Found</h1>`
})

app.use(router.routes())
app.use(async (ctx, next) => {
    await next()
    const rt = ctx.response.get('X-Response-Time')
    console.log(`${ctx.method} ${ctx.url} ${rt}`)
})

app.use(async (ctx, next) => {
    const start = Date.now();
    await next()
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
})
app.use(async ctx => {
    ctx.body = 'Hello World'
})

app.listen(8099)