loader = new THREE.OBJMTLLoader();

var Ship = function(scene, shipName) {
	
	ship = this;
	ship.scene = scene;
	ship.position = {x: 0, y: 0, z: 0};
	
	ship.Object3D = null;
	
	ship.baseName = 'models/ships/' + shipName + '/' + shipName + '.';
	
	loader.load(ship.baseName + 'obj', ship.baseName + 'mtl', function(object3d) {
		
		object3d.position.x = 0;
		object3d.position.y = 0;
		object3d.position.z = 0;
		
		object3d.scale.multiplyScalar(2);
		object3d.rotation.x += 0.1;
		
//		object3d.traverse(function(object3d){
//			if( object3d.material ){
//				object3d.material.emissive.set('white');
//			}
//		});
		
		ship.Object3D = object3d;
		scene.addObject(ship);
		
	});
	
	ship.update = function() {
		ship.Object3D.rotation.y += 0.01;
	};

	
};