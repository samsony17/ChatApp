var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/',function(req,res)
{
  var _dirname ='/home/samson/Desktop/chat-example'
  res.sendFile(_dirname + '/index.html');
});
io.on('connection',function(socket)
{
  console.log('Samson User is connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: '+ msg);
  });
});
http.listen(3000,function()
{
  console.log('listening on *:3000');
});
