# koajs-static-folder

Middleware for KoaJS to serve a folder as static files. Other implementations require every file to be appointed individually (as far as I know). The software initializes at the startup of your application, so changes made in the underlying folders require a restart of your app.

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
