/* 
 * StarSystem should have its:
 * * Sun, eg. star
 * * planets
 * * planets should have their moons
 */

var StarSystem = function(config) {
	starsystem = this;
	
	starsystem.config = (function(config) {
		var result = {
			creationTime: Date.now(),
			systemTime: Date.now(),
			seed: 0
		};
		
		for(var i in result) {
			if(config.hasOwnProperty(i)) {
				result.i = config.i;
			}
		}
		
		return result;
	})(config);
	
	starsystem.random = new PRNG(starsystem.config.seed);
	starsystem.planets = (function (starsystem) {
		var planets = [];
		var count = starsystem.random.range(2, 15);
		
		for(var p = 0; p < count; p++) {
			var planet = {
				size: starsystem.random.range(20, 100), 
				positon: {
					x: 0,
					y: 0,
					z: 0
				}, 
				rotation: {
					x: 0,
					y: 0,
					z: 0
				}, 
				rotationSpeed: 0, 
				orbitSpeed: 0, 
				moons: []
			};
			
			var moonCount = starsystem.random.range(0, 5);
			
			for(var m = 0; m < moonCount; m++) {
				var moon = {
					size: starsystem.random.range(1, 10), 
					positon: {
						x: 0,
						y: 0,
						z: 0
					}, 
					rotation: {
						x: 0,
						y: 0,
						z: 0
					}, 
					rotationSpeed: 0, 
					orbitSpeed: 0
				};
				planet.moons.push(moon);
			}
			planets.push(planet);
		}

		return planets;
		
	})(starsystem);
	
	starsystem.Object3D =  function() {
		
		var systemOrbit = new OrbitHandler();
		var starOrbit = new OrbitHandler();
		
		systemOrbit.position.set(0,0,0);
		starOrbit.position.set(0,0,0);

		var star = new Star();
		star.position.set(0,0,0);

		starOrbit.addObject(star);
		systemOrbit.addObject(starOrbit);

		
		return systemOrbit;
	};
	
	return starsystem;
};
