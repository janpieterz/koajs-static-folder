# koajs-static-folder

Middleware for KoaJS to serve folder as static files.

## Example
```js
var serve = require('./'),
    koa = require('koa'),
    app = koa();

app.use(serve('./public'));
app.use(serve('./assets'));

app.use(function *(next){
    if('/' == this.path){
        this.body = 'Try GET one of the following: `/assets/style.css`,`/public/blabla.json`,`/public/style.css`';
    }
});

app.listen(8000);
console.log('Koa server listening at port 8000');
```

## License
  MIT
