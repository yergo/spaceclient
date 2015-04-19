var PlanetTextures = new Textures('planets', 7);

var Planet = function(seed) {

	planet = this;
	planet.seed = seed;
	
	planet.objects = [];
	
	planet.Object3D = (function() {
		
		var sphereGeometry = new THREE.SphereGeometry(10 + 100 * Math.random(), 15, 15);
		var sphereMaterial = new THREE.MeshPhongMaterial({
			map: PlanetTextures.next()
		});
		sphereMaterial.wrapAround = true;
		
		var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphereMesh.castShadow = true; // planets are casting shadows
		
		return sphereMesh;
	})();
	
	planet.addObject = function(elem) {
		this.objects.push(elem);
		this.Object3D.add(elem.Object3D);
	};
	
	planet.position = planet.Object3D.position;
	planet.rotation = planet.Object3D.rotation;
	
	planet.animate = function(delta) {
		for(var i in this.objects) {
			this.objects[i].animate(delta);
		}
		
		this.rotation.y += 1/60 / 2.5 * delta; // sphere rotation - spinning planet
	};
	
	return planet;
};