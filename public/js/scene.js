
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
	this.scene.add( new THREE.AmbientLight( 0xffffff ) );

    // http://bkcore.com/blog/3d/webgl-three-js-animated-selective-glow.html
	//http://aerotwist.com/tutorials/an-introduction-to-shaders-part-2/
	this.glowscene = new THREE.Scene();
	this.glowscene.add( new THREE.AmbientLight( 0xffffff ) );
//	
//	// composers:
//	var renderTargetParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBufer: false };
//	var renderTargetGlow = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, renderTargetParameters );
//	var hblur = new THREE.ShaderPass( THREE.ShaderExtras[ "horizontalBlur" ] );
//	var vblur = new THREE.ShaderPass( THREE.ShaderExtras[ "verticalBlur" ] );
//
//	var bluriness = 3;
//	hblur.uniforms[ "h" ].value = bluriness / window.innerHeight;
//	vblur.uniforms[ "v" ].value = bluriness / window.innerWidth;
//	
//	var renderModelGlow = new THREE.RenderPass( this.glowscene, this.camera);
// 
//	// Create the glow composer
//	this.glowcomposer = new THREE.EffectComposer( this.renderer, renderTargetGlow );
//
//	// Add all the glow passes
//	this.glowcomposer.addPass( renderModelGlow );
//	this.glowcomposer.addPass( hblur );
//	this.glowcomposer.addPass( vblur );
//
//	finalshader.uniforms[ "tGlow" ].value = this.glowcomposer.renderTarget2;
//	var renderModel = new THREE.RenderPass( this.scene, this.camera );
//	var finalPass = new THREE.ShaderPass( finalshader );
////	finalPass.needsSwap = true;
////	finalPass.renderToScreen = true;
// 
//	var renderTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, renderTargetParameters );
//	this.finalcomposer = new THREE.EffectComposer( this.renderer, renderTarget );
//
//	this.finalcomposer.addPass( renderModel );
//	this.finalcomposer.addPass( finalPass );
	
	
	
	
	this.camera.position.z = 13000;
}

Scene.prototype.light = false;
Scene.prototype.objects = [];

/**
 * Adding objects to scene. Passed element should have an Object3D property with {scene: Mesh, glowscene: Mesh}
 * 
 * @param {Object} elem
 * @returns {undefined}
 */
Scene.prototype.addObject = function(elem) {
	
	this.objects.push(elem);
	
	if(elem.Object3D.hasOwnProperty('scene') && elem.Object3D.scene !== null) {
		this.scene.add(elem.Object3D.scene);
	}
	
	if(elem.Object3D.hasOwnProperty('glowscene') && elem.Object3D.glowscene !== null) {
		this.glowscene.add(elem.Object3D.glowscene);
	}
	
};

/**
 * Change processor (animation evaluator) and renderer
 * 
 * @returns {undefined}
 */
Scene.prototype.render = function() {
	this.controls.update();
	for(var i in this.objects) {
		this.objects[i].update();
	}

//	this.glowcomposer.render();
//	this.finalcomposer.render();
	this.renderer.render(this.scene, this.camera);
};

/**
 * Makes scene sensitivo to window size changes.
 * 
 * @returns {undefined}
 */
Scene.prototype.refreshSize = function() {
	
	// camera spect update
	this.camera.aspect = window.innerWidth / window.innerHeight;
	this.camera.updateProjectionMatrix();
	
	// scene size update
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	
};

