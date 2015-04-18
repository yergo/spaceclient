var Star = function(seed) {

	star = this;
	star.seed = seed;
	star.objects = [];
	star.hearths = [];
	
	star.Object3D = (function() {
		
		var texture = new THREE.ImageUtils.loadTexture('img/textures/sunmap.jpg');
//		var glow = new THREE.ImageUtils.loadTexture('img/textures/sunmap_alpha.jpg');
//		var light = new THREE.ImageUtils.loadTexture('img/textures/sunmap_glow.jpg');
		var light = new THREE.ImageUtils.loadTexture('img/textures/sunmap_light.jpg');
		
		var sphereGeometry = new THREE.SphereGeometry(1000, 30, 30);
		sphereMaterial = new THREE.MeshPhongMaterial({
//			color: 0x505050,
			map: texture,
			lightMap: light,
//			glowMap: glow,
			transparent: true
		});
		
		// temp
//		sphereMaterial.wireframe = true;
		sphereMaterial.emissive = new THREE.Color(20,20,20);
		
		var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphereMesh.castShadow = false; // stars are not casting shadows
		
		var light = new THREE.PointLight(0xffffff, 1, 100000);
//		var light = new THREE.PointLight(0xf4ff75, 1, 0);
		light.position.set(0, 0, 0);

		sphereMesh.add(light);
		return sphereMesh;
	})();
	
	
	star.addObject = function(elem) {
		this.objects.push(elem);
		this.Object3D.add(elem.Object3D);
	};
	
	star.position = star.Object3D.position;
	star.rotation = star.Object3D.rotation;
	
	star.animate = function(delta) {
		for(var i in this.objects) {
			this.objects[i].animate(delta);
		}
		// temp
		this.rotation.y += 1/60 / 2 * delta;
		
	};
	
	return star;
};