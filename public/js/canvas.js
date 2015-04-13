
var Canvas = function() {

    var cv = this;

    cv.canvas  = document.getElementById('canvas');
    cv.context = cv.canvas.getContext('2d');
	
	cv.objects = [];
	cv.timer = false;

    cv.resizeCanvas = function () {
		cv.canvas.width = window.innerWidth;
		cv.canvas.height = window.innerHeight;
		cv.timer = cv.timer === false && setTimeout(function() {
			cv.redraw();
			cv.timer = false;
			console.log('redrawing');
		}, 1000/60);
    };

	cv.redraw = function() {
		cv.context.save();
		cv.context.clearRect(0, 0, canvas.width, canvas.height);
		cv.context.globalAlpha=1;
		
		g = {
			radius: 300,
			scale: this.canvas.height/600,
			x: cv.canvas.width/2,
			y: cv.canvas.height/2
		};
		
		
		for(i in cv.objects) {
			obj = cv.objects[i];
			obj.render(cv.canvas, cv.context);
		}
		
		cv.context.restore();
	};

	cv.active = function () {
		$(cv.canvas).addClass('active');
	};
	
	cv.inactive = function() {
		$(cv.canvas).removeClass('active');
	};
	
	cv.addObject = function(obj) {
		return cv.objects.push(obj) -1;
	};
};