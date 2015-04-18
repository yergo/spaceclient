var PlanetTextures = new (function() {
	pt = this;
	
	pt.textures = (function(){
		result = [];
		for(var i = 1; i <= 7; i++) {
			var x = new THREE.ImageUtils.loadTexture('img/textures/planets/0' + i.toString() + '.png');
			x.wrapS = x.wrapT = THREE.ClampToEdgeWrapping;// THREE.RepeatWrapping;
			x.minFilter = THREE.LinearFilter;
			result.push(x);
		}
		
		return result;
	})();
	
	pt.last = 0;
	pt.random = function() {
		var i = Math.floor(Math.random() * this.textures.length);
		return this.textures[i];
	};
	
	pt.next = function() {
		var n = this.textures.length;
		(++this.last >= n) && (this.last = 0);
		return this.textures[this.last];
	};
})();

var Planet = function(seed) {

	planet = this;
	planet.seed = seed;
	
	planet.objects = [];
	
	planet.Object3D = (function() {
		
		var sphereGeometry = new THREE.SphereGeometry(100, 15, 15);
		var sphereMaterial = new THREE.MeshPhongMaterial({
//			color: 0x00C000,
			map: PlanetTextures.next()
		});
		
		// temp
//		sphereMaterial.wireframe = true;
		
		var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphereMesh.castShadow = true; // planets are casting shadows
		
		return sphereMesh;
	})();
	
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