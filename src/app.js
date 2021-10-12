const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const approuter = require('./router/route');
const port = process.env.PORT || 3000

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'../templates/views'));
hbs.registerPartials(path.join(__dirname,'../templates/partials'));

app.use(express.static(path.join(__dirname,'../public')));
app.use(approuter);

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
}) 