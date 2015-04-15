<html>
    <head>
<?php
	
	$assets = [
		['css', 'canvas'],
		
		['js', 'jquery-2.1.3.min'],
		['js', 'three'],
//		['js', 'RenderManager'],
		['js', 'controls/OrbitControls'],
		['js', 'socket.io-1.3.4'],
		['js', 'timeout'],
		['js', 'scene'],
		
//		['js', 'canvas'],
//		['js', 'client'],
		
		['js', 'mersenne_twister'],
		['js', 'prng'],
		['js', 'galaxy'],

		['js', 'loaders/OBJLoader'],
		['js', 'loaders/MTLLoader'],
		['js', 'loaders/OBJMTLLoader'],
		['js', 'ship'],
		
//		['js', 'star'],
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


/**
 * Galaxy
 */

//		gl = new Galaxy();
//		gl.generate();
//		
//		for(i in gl.stars) {
//			star = gl.stars[i];
//			scene.addObject(star);
//		}

/**
 * Ship
 */
		
		ship = new Ship(scene, 'SpaceFighter03');
		
		var light = new THREE.PointLight('white', 10, 0);
		light.position.set(0, 0, 0);
		light.name	= 'Key light';
		
		star = new Star(0, {x: 100 , y: 500 , z: -1000});
		star.Object3D.add(light);
		
		scene.addObject(star);
		

//	    window.addEventListener('resize', canvas.resizeCanvas, false);
//		canvas.resizeCanvas();
//		canvas.redraw();
		
    </script>
</html>