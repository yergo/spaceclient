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
		
		['js', 'StarSystem/OrbitHandler'],
		['js', 'StarSystem/Star'],
		['js', 'StarSystem/Planet'],
//		['js', 'StarSystem/Moon']

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
		
		systemOrbit = new OrbitHandler();
		starOrbit = new OrbitHandler();
		
		systemOrbit.position.set(0,0,0);
		starOrbit.position.set(0,0,0);

		star = new Star();
		star.position.set(0,0,0);

		starOrbit.addObject(star);

		
		for(var i =1; i <= 7; i++) {
			var planetOrbit = new OrbitHandler();;
			planetOrbit.position.set(0,0,0);
			
			planet = new Planet();
			planet.position.set(i*1500, 0, 0); // odsunięcie od gwiazdy
			
			planetOrbit.addObject(planet);
			planetOrbit.rotation.x += Math.PI * 2 * Math.random(); // odchylenie od poziomu
			planetOrbit.rotation.z += -0.5 + Math.random(); // odchylenie od poziomu
			planetOrbit.rotation.y += Math.PI * 2 * Math.random(); // odchylenie od osi y, miejsce staru na orbicie
			
			// prędkość orbitowania
//			planetOrbit.rotationSpeed.y = Math.PI; // 1 orbita na minute
//			planetOrbit.rotationSpeed.y = Math.PI * 2 / 60; // 1 orbita na minute
			planetOrbit.rotationSpeed.y = Math.PI / 30 / 60 * (0.5 + Math.random()); // 1 orbita na godzinę
			
			starOrbit.addObject(planetOrbit);
		}
		
		systemOrbit.addObject(starOrbit);
		
		scene.addObject(systemOrbit);
		
		// objects
//		star.position.set(0,0,0);
		
//		planetOne = new Planet();
//		planetOne.position.set(0, 0, 2000);
//		star.addObject(planetOne);
//		
//		scene.addObject(star);
		
		
		function animate() {
			requestAnimationFrame(animate);
			scene.render();
		}
		animate();

    </script>
</html>