
let app =require('express')();
//初始化app作为HTTP服务器的回调函数
let http = require('http').Server(app);
//传入http对象初始化socket.io的实例
let socket = require('socket.io')(http);

http.listen('8080',function(){
   console.log("server listen on 8080");
});
//处理首页'/'
app.get('/',function(){
   console.log("HELLO Welcome to the server");
});
 socket.on('connection',function(socket){
     console.log("a user connected");
     socket.on('request',function(data){
         console.log("it need "+data);
         socket.emit('responce',"heheyuanqing");
     });
 });