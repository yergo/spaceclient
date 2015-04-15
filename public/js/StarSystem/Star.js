var Star = function(seed) {

	star = this;
	star.seed = seed;
	star.objects = [];
	star.hearths = [];
	
	star.Object3D = (function() {
		
		var sphereGeometry = new THREE.SphereGeometry(1000, 30, 30);
		var sphereMaterial = new THREE.MeshPhongMaterial({
			color: 0xffff00
		});
		
		// temp
		sphereMaterial.wireframe = true;
		
		var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphereMesh.castShadow = false; // stars are not casting shadows
		
		return sphereMesh;
	})();
	
	
	star.addObject = function(elem) {
		this.objects.push(elem);
		this.Object3D.add(elem.Object3D);
	};
	
	star.position = star.Object3D.position;
	star.rotation = star.Object3D.rotation;
	
	star.animate = function() {
		for(var i in this.objects) {
			this.objects[i].animate();
		}
		// temp
//		this.rotation.y += 1/60 / 30;
		
	};
	
	return star;
};