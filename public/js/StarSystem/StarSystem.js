/* 
 * StarSystem should have its:
 * * Sun, eg. star
 * * planets
 * * planets should have their moons
 */

var StarSystem = function(config) {
//	starsystem = this;
//	
//	starsystem.config = (function(config) {
//		var result = {
//			creationTime: Date.now(),
//			systemTime: Date.now(),
//			seed: 0
//		};
//		
//		for(var i in result) {
//			if(config.hasOwnProperty(i)) {
//				result[i] = config[i];
//			}
//		}
//		
//		return result;
//	})(config);
//	
//	starsystem.random = new PRNG(starsystem.config.seed);
//	starsystem.planets = (function (starsystem) {
//		var planets = [];
//		var count = starsystem.random.range(2, 15);
//		
//		for(var p = 0; p < count; p++) {
//			var planet = {
//				size: starsystem.random.range(10, 200), 
//				position: {
//					x: 1000 + p * 3000 + starsystem.random.range(300, 2000), // distance from sun
//					y: 0,
//					z: 0
//				}, 
//				rotation: {
//					x: starsystem.random.range(0, Math.PI / 2 * 100) / 100,// obrót counterclockwise wzgłóż osi X
//					y: starsystem.random.range(0, Math.PI * 100) / 100,// miejsce staru na orbicie
//					z: starsystem.random.range(0, Math.PI / 2 * 100) / 100 // obrót counterclockwise wzgłów osi Y
//				}, 
//				rotationSpeed: 0, 
//				orbitSpeed: starsystem.random.range(0, Math.PI*200) / 100 / 60 / 60, 
//				moons: []
//			};
//			
//			var moonCount = starsystem.random.range(0, 5);
//			
//			for(var m = 0; m < moonCount; m++) {
//				var moon = {
//					size: starsystem.random.range(1, 10), 
//					position: {
//						x: 200 + m * 300 + starsystem.random.range(50, 200), // distance from planet
//						y: 0,
//						z: 0
//					}, 
//					rotation: {
//						x: 0,// odchylenie od poziomu
//						y: 0,// odchylenie od poziomu
//						z: 0 // odchylenie od osi y, miejsce startu na orbicie
//					}, 
//					rotationSpeed: 0, 
//					orbitSpeed: 0
//				};
//				planet.moons.push(moon);
//			}
//			planets.push(planet);
//		}
//
//		return planets;
//		
//	})(starsystem);
//	
//	return starsystem;
	
	THREE.Object3D.call(this);
	this.config = (function(config) {
		var result = {
			creationTime: Date.now(),
			systemTime: Date.now(),
			seed: 0
		};
		
		for(var i in result) {
			if(config.hasOwnProperty(i)) {
				result[i] = config[i];
			}
		}
		
		return result;
	})(config);
	
	this.random = new PRNG(this.config.seed);
};

StarSystem.prototype = Object.create( THREE.Object3D.prototype );
StarSystem.prototype.generate = function() {
	// create textures and meshes
	// generate system configurations
};

StarSystem.prototype.create = function () {
	// generate child star with planets
};
