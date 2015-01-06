# koajs-static-folder

Middleware for KoaJS to serve a folder as static files. Other implementations require every file to be appointed individually (as far as I know). The software initializes at the startup of your application, so changes made in the underlying folders require a restart of your app.

## Example
```js
var serve = require('koa-static-folder'),
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

## Release log
0.1.5 - Updated documentation slightly.  
0.1.4 - Updated documentation slightly.  
0.1.3 - Using procedd.cwd() instead of dirname fixing some bugs with different file locations and systems.  
0.1.2 - Removed unnecessary dependencies and fixed broken dependency.  