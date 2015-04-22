
function Scene( ) {
	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 150000 );
	this.controls = new THREE.OrbitControls( this.camera );
		
	this.renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( this.renderer.domElement );

	var ambientLight = new THREE.AmbientLight( 0x000000 );
//	ambientLight = new THREE.AmbientLight( 0xffffff );
	this.scene.add( ambientLight );

	this.camera.position.z = 5300;
}

Scene.prototype.render = function() {
	this.controls.update();
	this.renderer.render(this.scene, this.camera);
};

Scene.prototype.refreshSize = function() {
	
	// camera spect update
	this.camera.aspect = window.innerWidth / window.innerHeight;
	this.camera.updateProjectionMatrix();
	
	// scene size update
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	
};
