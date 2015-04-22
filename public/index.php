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
		['js', 'scene'],
		
		['js', 'Utils/Textures'],
		['js', 'StarSystem/OrbitHandler'],
		['js', 'StarSystem/Star'],
		['js', 'StarSystem/Planet'],
		['js', 'StarSystem/Moon'],
		
		// random generators
		['js', 'Utils/MersenneTwister'],
		['js', 'Utils/PRNG'],
		['js', 'StarSystem/StarSystem'],
		
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
		
		var clock = new THREE.Clock();
		var delta = 0;

		var system = new StarSystem({
			seed: 1
		});
		
		scene.scene.add(system);
		
		function animate() {
			requestAnimationFrame(animate);
			delta = clock.getDelta();
			scene.render();
		}
		animate();

    </script>
</html>