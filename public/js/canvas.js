
var Canvas = function() {

    var cv = this;

    cv.canvas  = document.getElementById('canvas');
    cv.context = cv.canvas.getContext('2d');

    cv.resizeCanvas = function () {
		cv.canvas.width = window.innerWidth;
		cv.canvas.height = window.innerHeight;
		console.log('resizing');
    };

    window.addEventListener('resize', cv.resizeCanvas, false);
    cv.resizeCanvas();

	cv.active = function () {
		$(cv.canvas).addClass('active');
	};
	
	cv.inactive = function() {
		$(cv.canvas).removeClass('active');
	};
};