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
		planetOneOrbit = new OrbitHandler();
		planetTwoOrbit = new OrbitHandler();
		planetThreeOrbit = new OrbitHandler();
		
		systemOrbit.position.set(0,0,0);
		starOrbit.position.set(0,0,0);
		planetOneOrbit.position.set(0,0,0);
		planetTwoOrbit.position.set(0,0,0);
		planetThreeOrbit.position.set(0,0,0);

		star = new Star();
		planetOne = new Planet();
		planetTwo = new Planet();
		planetThree = new Planet();
		
		star.position.set(0,0,0);
		planetOne.position.set(2000, 0, 0);
		planetTwo.position.set(4000, 0, 0);
		planetThree.position.set(6000, 0, 0);
		
		starOrbit.addObject(star);
		planetOneOrbit.addObject(planetOne);
		planetTwoOrbit.addObject(planetTwo);
		planetThreeOrbit.addObject(planetThree);
		
		planetOneOrbit.rotation.x += 0.5;
		planetTwoOrbit.rotation.x -= 0.2;
		planetThreeOrbit.rotation.x -= 0.0;
		
		planetOneOrbit.rotationSpeed.y = 0.02;
		planetTwoOrbit.rotationSpeed.y = 0.01;
		planetThreeOrbit.rotationSpeed.y = 0.005;
		
		starOrbit.addObject(planetOneOrbit);
		starOrbit.addObject(planetTwoOrbit);
		starOrbit.addObject(planetThreeOrbit);
		
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