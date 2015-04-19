var MoonTextures = new Textures('moons', 2);

var Moon = function(size) {

	moon = this;
	
	moon.objects = [];
	
	moon.Object3D = (function(size) {
		
		var sphereGeometry = new THREE.SphereGeometry(size, 15, 15);
		var sphereMaterial = new THREE.MeshPhongMaterial({
			map: MoonTextures.next()
		});
		sphereMaterial.wrapAround = true;
		
		var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphereMesh.castShadow = true; // moons are casting shadows
		
		return sphereMesh;
	})(size);
	
	moon.position = moon.Object3D.position;
	moon.rotation = moon.Object3D.rotation;
	
	moon.animate = function(delta) {
		for(var i in this.objects) {
			this.objects[i].animate(delta);
		}
		
		this.rotation.y += 1/60 / 2.5 * delta; // sphere rotation - spinning moon
	};
	
	return moon;
};