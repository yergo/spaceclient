var Planet = function(seed) {

	planet = this;
	planet.seed = seed;
	
	planet.objects = [];
	
	planet.Object3D = (function() {
		
		var sphereGeometry = new THREE.SphereGeometry(100, 15, 15);
		var sphereMaterial = new THREE.MeshPhongMaterial({
			color: 0x00C000
		});
		
		// temp
		sphereMaterial.wireframe = true;
		
		var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphereMesh.castShadow = true; // planets are casting shadows
		
		return sphereMesh;
	})();
	
	planet.position = planet.Object3D.position;
	planet.rotation = planet.Object3D.rotation;
	
	planet.animate = function() {
		for(var i in this.objects) {
			this.objects[i].animate();
		}
		
//		this.rotation.y -= 1/60 / 30; // sphere rotation - spinning planet
	};
	
	return planet;
};