const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const { getHomePage } = require('./routes/index');
const { addCustomerPage, addCustomer, editCustomerPage, editCustomer, deleteCustomer } = require('./routes/customer');
// set the default port 
const PORT = 3000;


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodecrud'
});

// connect to mysql database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("mysql database connected");
});

// make db connection global 
global.db = db;

//configure the middleware
app.set('port', process.env.PORT || PORT); 
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload()); 

app.get('/', getHomePage);
app.get('/add', addCustomerPage);
app.post('/add', addCustomer);
app.get('/edit/:id', editCustomerPage);
app.post('/edit/:id', editCustomer);
app.get('/delete/:id', deleteCustomer);

app.listen(PORT, () => {
    console.log(` The server is running on localhost:${PORT}`);
})