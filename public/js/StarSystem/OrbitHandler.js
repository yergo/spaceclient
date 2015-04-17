var OrbitHandler = function() {
	
	handler = this;
	
	handler.objects = [];
	
	handler.Object3D = new THREE.Object3D();

	handler.addObject = function(elem) {
		this.objects.push(elem);
		this.Object3D.add(elem.Object3D);
	};
	
	handler.rotation = handler.Object3D.rotation;
	handler.position = handler.Object3D.position;
	
	handler.rotationSpeed = {
		x: 0,
		y: 0,
		z: 0
	};
	
	handler.animate = function() {
		
		for(var i in this.objects) {
			this.objects[i].animate();
		}
		
		this.Object3D.rotation.x += this.rotationSpeed.x;
		this.Object3D.rotation.y += this.rotationSpeed.y;
		this.Object3D.rotation.z += this.rotationSpeed.z;
	};
};