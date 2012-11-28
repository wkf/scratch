var express = require('express'),
    port    = 8888;

var oneYear = 31557600000;

var app = express();

express.static.mime.define({'text/cache-manifest': ['appcache']});

app.use(express.static(__dirname + '/public', { maxAge: oneYear }));

app.listen(port);

console.log('Listening on ' + port + ' in ' + app.settings.env + ' mode ...');
console.log('Press Ctrl + C to stop.');
