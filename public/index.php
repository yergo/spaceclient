<html>
    <head>

<?php
	
	$assets = [
		['css', 'canvas'],
		
		['js', 'jquery-2.1.3.min'],
		['js', 'socket.io-1.3.4'],
		['js', 'canvas'],
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
		<canvas id="canvas"></canvas>
    </body>

    <script>
		canvas = new Canvas();
		client = new Client();
		
		client.connect();
		client.installEvent('connect', canvas.active);
		client.installEvent('disconnect', canvas.inactive);
		
		gl = new Galaxy();
		gl.generate(canvas);
		
	    window.addEventListener('resize', canvas.resizeCanvas, false);
		canvas.resizeCanvas();
		
    </script>
</html>