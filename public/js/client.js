var Client = function () {
	var cli = this;
	
	cli.socket = null;
	
	cli.connect = function() {
		
		var config = {
			'url' : window.location.host,
			'port' : '3001'
		};
		
		cli.beforeConnect();
		cli.socket = io.connect(config.url + ':' + config.port);
		
		cli.installEvent('connect', cli.connected);
		cli.installEvent('disconnect', cli.disconnected);
		
	};
	
	cli.installEvent = function(eventName, closure) {
		cli.socket.on(eventName, closure);
	};
	
	cli.beforeConnect = function() {
		console.log('connection pending');
	};
	
	cli.connected = function() {
		console.log('connected');
	};
	
	cli.disconnected = function() {
		console.log('disconnected');
	};
	
};