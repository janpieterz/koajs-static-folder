var serve = require('./'),
    koa = require('koa'),
    app = koa();

app.use(serve('./public'));
app.use(serve('./assets'));

app.use(function *(next){
    if('/' == this.path){
        this.body = 'Try GET `/assets/style.css`';
    }
});

app.listen(8000);
console.log('Koa server listening at port 8000');