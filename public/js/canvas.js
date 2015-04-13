
var Canvas = function() {

    var cv = this;

    cv.canvas  = document.getElementById('canvas');
    cv.context = cv.canvas.getContext('2d');
	
	cv.objects = [];
	cv.timer = false;

    cv.resizeCanvas = function () {
		cv.canvas.width = window.innerWidth;
		cv.canvas.height = window.innerHeight;
    };

	cv.inRedraw = false;
	cv.redraw = function() {
		
		if(this.inRedraw === false) {
			this.inRedraw = true;
		
			renderStart = new Date().getTime();

			cv.context.save();
			cv.context.clearRect(0, 0, cv.canvas.width, cv.canvas.height);
			cv.context.globalAlpha = 1;

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
		
			console.log('Render time: ' + (new Date().getTime()-renderStart) + 'ms');
			
			this.inRedraw = false;
			
		} else {
			console.log('skip');
		}

		Timer(function() {
			cv.redraw();
		}, 1000/60);
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