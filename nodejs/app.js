var mysql = require("mysql");
var express = require('express');
var app = express();

var session = require('express-session');
app.use(session({secret: 'ssshhhhh'}));
var sess;

app.set('view engine', 'ejs');

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var cors = require('cors');
app.use (cors());

const crypto = require('crypto');
const secret = 'abcdefg';

var connection = mysql.createConnection
(
    {
        host: "localhost",
        port: 8889,
        database: "slimjo-mini-project",
        user: "root",
        password: "root",
    }
) 

// PASSWORD ENCRYPTION

app.get('/encrypt', function(req, res)
{
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
    .update('test')
    .digest('hex');

    console.log(hash);

    res.end();
})

// HOME

app.get('/', function(req,res)
{
    connection.query(`SELECT * FROM seasonalCategory`, function(err,rows)
    {
        res.json(rows);
    });
});

// SEASONAL TO CATEGORY

app.get('/categories', function(req,res)
{
    connection.query(`SELECT * FROM productCategory`, function(err,rows)
    {
        res.json(rows);
    });
});

// CATEGORY TO PRODUCT LIST

app.get('/products', function(req,res)
{
    connection.query(`SELECT * FROM productList`, function(err,rows)
    {
        res.json(rows);
    });
});

// USER REGISTER

app.post('/register', function(req, res)
{
    const password = crypto.createHmac('sha256', secret)
    .update(req.body.password)
    .digest('hex');

    connection.query("insert into userLogin set ? ",
    {
        username : req.body.username,
        password : req.body.password,
    });

    connection.query("insert into userData set ? ",
    {
        name : req.body.name,
        email : req.body.email,
    });
})

// USER LOGIN

app.post('/login', function(req, res)
{
    const password = crypto.createHmac('sha256', secret)
    .update(req.body.password)
    .digest('hex');

    var sql = 'SELECT * FROM userLogin WHERE username = ? and password = ?';
    connection.query(sql, [req.body.username, password], function (err, rows) {
    //if (err) throw err;
    //console.log(rows[0].userid);

        if (rows.length > 0)
        {
            sess=req.session;
            sess.userid = rows[0].userid;
            sess.username = rows[0].username;

            res.redirect('/');
            console.log('Successfully logged in')
        }
        else
        {
            res.render('Login', 
            {
                notif:'Username atau Password salah!'
            });
        }
    });
    
    //res.end();
})




app.listen(3001);