
var app = require('http').createServer().listen(3001);
var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) {
	socket.emit('notification', 'connected');
});