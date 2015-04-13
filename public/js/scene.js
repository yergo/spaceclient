
function Scene( ) {
	this.scene = new THREE.Scene();
	this.camera = camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	
	this.renderer = new THREE.WebGLRenderer();
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( this.renderer.domElement );
}

Scene.prototype.refreshSize = function() {
	scene.renderer.setSize( window.innerWidth, window.innerHeight );
}

Scene.prototype.setEvents = function() {
	window.addEventListener('resize', this.refreshSize, false);
}