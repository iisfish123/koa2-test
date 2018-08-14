/**
 * Created by lkz on 2018/8/13.
 */
const koa = require('koa');
const app = new koa();
app.use(async (ctx, next)=>{
    //await next();
    const request = ctx.request;
    const response = ctx.response;
    console.info(request.path , '------------', request.querystring);
    if(request.path === '/'){
        response.body = 'index page';
    }else{
        await next();
    }

});

app.listen(3000,()=>{
    console.info('开始监听3000端口');
})