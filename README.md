# koajs-static-folder

Middleware for KoaJS to serve a folder as static files. Other implementations require every file to be appointed individually (as far as I know). The software initializes at the startup of your application, so changes made in the underlying folders require a restart of your app.


## Options

 - `maxage` Browser cache max-age in milliseconds. defaults to 0
 - `hidden` Allow transfer of hidden files. defaults to false
 - `gzip` Try to serve the gzipped version of a file automatically when `gzip` is supported by a client and if the requested file with `.gz` extension exists. defaults to true.
 - `format` If not `false` (defaults to `true`), format the path to serve static file servers and not require a trailing slash for directories, so that you can do both `/directory` and `/directory/`


## Example
```js
var serve = require('koa-static-folder'),
    koa = require('koa'),
    app = koa();

app.use(serve('./public'));
app.use(serve('./assets', {maxage: 5 * 60 * 1000}));

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
0.1.6 - Added the possibility to inform max-age for caching.  
0.1.5 - Updated documentation slightly.  
0.1.4 - Updated documentation slightly.  
0.1.3 - Using procedd.cwd() instead of dirname fixing some bugs with different file locations and systems.  
0.1.2 - Removed unnecessary dependencies and fixed broken dependency.  
