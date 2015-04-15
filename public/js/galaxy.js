/**
 * Generates a galaxy-like environment.
 * Client-side.
 */

var Config = function() {
	cnf = this;

	cnf.spiral_arms = 2,
	cnf.spiral_angle_degrees = 320,
	cnf.min_radius = 0.05 * 10000,
	cnf.max_radius = 0.9 * 10000,
	cnf.thickness = 0.1 * 10000,
	cnf.scatter_theta = Math.PI / cnf.spiral_arms * 0.2,
	cnf.scatter_radius = cnf.min_radius * 0.4,
	cnf.spiral_b = cnf.spiral_angle_degrees / Math.PI * cnf.min_radius / cnf.max_radius,
	cnf.start = (new Date()).getTime(),
	cnf.names = [],
	cnf.rejects = {badwords: 0, duplicates: 0},
	cnf.totalCount = 500,
//	cnf.totalCount = 100,
	cnf.seed = 1024;

	return cnf;
};

var Galaxy = function(config) {

	var gx = this;
	gx.config = config || new Config();

	gx.stars = [];

	gx.generate = function(cv) {
		var pseudoRandom = new PRNG(gx.config.seed);
		var i, position;
		gx.stars = [];


		for (var i = 0; i < gx.config.totalCount; i++) {

			var r = pseudoRandom.realRange(gx.config.min_radius, gx.config.max_radius);
			var theta = gx.config.spiral_b * Math.log(r / gx.config.max_radius) + pseudoRandom.gaussrandom(gx.config.scatter_theta);
			r += pseudoRandom.gaussrandom(gx.config.scatter_radius);

			// put on spiral arm
			theta += pseudoRandom.range(0, gx.config.spiral_arms - 1) * Math.PI * 2 / gx.config.spiral_arms;
			position = {
				x: Math.cos(theta) * r,
				y: Math.sin(theta) * r,
				z: pseudoRandom.gaussrandom(gx.config.thickness * 0.5)
			};

			var star = new Star(r, position);
			gx.stars.push(star);
		}

	};

};

var sunmap = THREE.ImageUtils.loadTexture("img/textures/sunmap.jpg");
var sunmapglow = THREE.ImageUtils.loadTexture("img/textures/sunmap_glow.jpg");
var sunmapalpha = THREE.ImageUtils.loadTexture("img/textures/sunmap_alpha.jpg");

var Star = function(seed, position) {
	
	star = this;

	star.random = new PRNG(seed);
	star.seed = seed;
	star.position = position;
	star.name = null;
	star.rotation = {x: 0, y: 0};

	star.getName = function() {
		if (this.name === null) {
			this.name = Math.random();
		}

		return this.name;
	};
	
	star.Object3D = (function() {
		var geometry = new THREE.SphereGeometry( 50, 10, 10 );
		var material = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			map: sunmap,
//			alphaMap: sunmapglow,
//			lightMap: sunmapalpha,
			transparent: true
		});

		var sphere = new THREE.Mesh( geometry, material );
		sphere.castShadow = false;

		sphere.position.x = star.position.x;
		sphere.position.y = star.position.y;
		sphere.position.z = star.position.z;

		star.rotation = {
			x: star.random.realRange(0, 0.01),
			y: star.random.realRange(0, 0.01)
		};
		
		return sphere;
	})();
	
	star.update = function() {
		/**
		 * @todo not working
		 */
		this.Object3D.rotation.x += this.rotation.x;
		this.Object3D.rotation.y += this.rotation.y;
	};
	
};

