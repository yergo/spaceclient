var Planet = function(seed) {

	planet = this;
	planet.seed = seed;
	
	planet.objects = [];
	
	planet.sphere = null;
	
	planet.Object3D = (function() {
		
		var sphereGeometry = new THREE.SphereGeometry(100, 15, 15);
		var sphereMaterial = new THREE.MeshPhongMaterial({
			color: 0x00C000
		});
		
		// temp
		sphereMaterial.wireframe = true;
		
		var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphereMesh.castShadow = true; // planets are casting shadows
		
		planet.sphere = sphereMesh;
		
		var orbitElement = new THREE.Object3D();
		orbitElement.add(planet.sphere);
		
		orbitElement.rotation.x = Math.random();
		orbitElement.rotation.y = 0;
		orbitElement.rotation.z = 0;
		
		return orbitElement;
	})();
	
	planet.position = planet.sphere.position;
	planet.rotation = planet.sphere.rotation;
	
	planet.animate = function() {
		for(var i in this.objects) {
			this.objects[i].animate();
		}
		
		// temp
//		this.rotation.y -= 1/60 / 30; // sphere rotation
//		this.Object3D.rotation.y += 1/60 / 30; // orbitElement rotation
		this.Object3D.rotation.y += 0.1; // orbitElement rotation
	};
	
	return planet;
};