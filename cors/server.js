/*
* CORS 包括两种请求
* 1.简单请求
* 2.非简单请求——发送OPTIONS预检请求
*
*
* 简单请求 ：方法包括HEAD\GET\POST且application/x-www-form-urlencoded、multipart/form-data、text/plain
*
* */
let express = require('express');
let app = express();

app.get('/', function (req, res, err) {
    if (err) {
        console.log(err);
    }
    res.header("Access-Control-Allow-Origin", "http://localhost:63342");
    res.write("GET SUCESSFULLY !");
    res.end();
});
app.post('/', function (req, res, err) {
    if (err) {
        console.log('Request Erro !');
        // return err;
    }
    if (req.headers.origin) {

        res.header("Content-Type", "text/html; charset=UTF-8");
        res.header("Access-Control-Allow-Origin", "http://localhost:63342");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.write("POST SUCESSFULLY !");
        res.end();
    }
});
app.put('/', function (req, res, err) {
    if (err) {
        console.log(err);
    }
    if (req.headers.origin) {
        res.header("Access-Control-Request-Method", "PUT");
        res.header("Content-Type", "text/html; charset=UTF-8");
        res.header("Access-Control-Allow-Origin", "http://localhost:63342");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.write("PUT SUCESSFULLY !");
        res.end();
    }

});
app.options('/', function (req, res, err) {
    if (err) {
        console.log('options  err');
        // return err;
    }

    res.header("Content-Type", "text/html; charset=UTF-8");
    res.header("Access-Control-Allow-Origin", "http://localhost:63342");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");

    res.write('OPTIONS SUCESSFULLY !');
    res.end();


});
console.log("app is listening on 3000");
app.listen(3000);
