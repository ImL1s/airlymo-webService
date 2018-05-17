var express = require('express');
var app = express();


app.get('/',(req,resp) => resp.send('hello'));     
app.listen(3000,() => console.log('start run app'
));
