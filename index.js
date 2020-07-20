const express = require('express');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
var cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser());

app.use('/', authRoute);
app.use('/users', userRoute);
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res)=> res.render('index'));

app.listen(port, function(){
    console.log(`Hello port ${port}`);
});