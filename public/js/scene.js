
// http://stemkoski.github.io/Three.js/Atmosphere.html
// atmosphere example

function Scene( ) {
	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 20000 );
	this.controls = new THREE.OrbitControls( this.camera );
	
	this.renderer = new THREE.WebGLRenderer();
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( this.renderer.domElement );
	
	/**
	 * @todo: light
	 * @todo: SkyBox
	 */

	this.camera.position.z = 1500;
}

Scene.prototype.addObject = function(obj) {
	this.scene.add(obj.getElement());
};

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

