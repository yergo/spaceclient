<html>
    <head>
	<script src ="https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js"></script>
<?php
	
	$assets = [
		['css', 'canvas'],
		
		['js', 'jquery-2.1.3.min'],
		['js', 'controls/OrbitControls'],
		['js', 'socket.io-1.3.4'],
		['js', 'timeout'],
		['js', 'scene'],
//		['js', 'canvas'],
		['js', 'client'],
		['js', 'mersenne_twister'],
		['js', 'prng'],
//		['js', 'star'],
		['js', 'galaxy'],
	];
	
	foreach($assets as $asset) {
		$input = '';
		switch($asset[0]) {
			case 'css':
				$input = '<link rel="stylesheet" type="text/css" href="css/%s.css" />';
				break;
			case 'js':
				$input = '<script src="js/%s.js"></script>';
				break;
			default:
				break;
		}
		
		echo "\t" . sprintf($input, $asset[1]) . PHP_EOL;
	}

?>
		
    </head>
    <body>
		
    </body>

    <script>

		scene = new Scene();
		window.addEventListener('resize', function() { scene.refreshSize(); }, false);
		
		function animate() {
			requestAnimationFrame(animate);
			scene.render();
		}
		animate();

//		canvas = new Canvas();
//		client = new Client();
//		
//		client.connect();
//		client.installEvent('connect', canvas.active);
//		client.installEvent('disconnect', canvas.inactive);
//		
		gl = new Galaxy();
		gl.generate();
		
		for(i in gl.stars) {
			star = gl.stars[i];
			scene.addObject(star);
		}
//		
//	    window.addEventListener('resize', canvas.resizeCanvas, false);
//		canvas.resizeCanvas();
//		canvas.redraw();
		
    </script>
</html>