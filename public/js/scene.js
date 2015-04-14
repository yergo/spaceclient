
// http://stemkoski.github.io/Three.js/Atmosphere.html
// atmosphere example

function Scene( ) {
	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 15000 );
	this.controls = new THREE.OrbitControls( this.camera );
	
	this.renderer = new THREE.WebGLRenderer();
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( this.renderer.domElement );
	
	/**
	 * @todo: light
	 * @todo: SkyBox
	 */
	// AbientLight - everything is sopposed to be invisible in black
//	var ambientLight = new THREE.AmbientLight( 0x000000 );
	var ambientLight = new THREE.AmbientLight( 0xffffff );
	this.scene.add( ambientLight );

    // http://bkcore.com/blog/3d/webgl-three-js-animated-selective-glow.html
	glowscene = new THREE.Scene();
	glowscene.add( new THREE.AmbientLight( 0xffffff ) );

	this.camera.position.z = 13000;
}

Scene.prototype.light = false;
Scene.prototype.objects = [];

Scene.prototype.addObject = function(elem) {
	this.objects.push(elem);
	this.scene.add(elem.Object3D);
};

Scene.prototype.render = function() {
	this.controls.update();
	for(var i in this.objects) {
		this.objects[i].update();
	}

	this.renderer.render(this.scene, this.camera);
};

Scene.prototype.refreshSize = function() {
	
	// camera spect update
	this.camera.aspect = window.innerWidth / window.innerHeight;
	this.camera.updateProjectionMatrix();
	
	// scene size update
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	
};

