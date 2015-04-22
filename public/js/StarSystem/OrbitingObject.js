	var OrbitingObject =  function ( config ) {

		THREE.Mesh.call( this, config.geometry, config.material );
		this.type = 'OrbitingObject';

		this.config = {
			spin: {
				axis: {
					x: 0,
					y: 1,
					z: 0
				},
				speed: Math.PI / 2
			},
			orbit: {
				axis: {
					x: 0,
					y: 1,
					z: 1
				},
				speed: Math.PI / 2
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			},
			position: {
				x: 0,
				y: 0,
				z: 0
			}
		};

		for(var i in this.config) {
			if(config.hasOwnProperty(i)) {
				this.config[i] = config[i];
			}
		}

		this.rotationAxis = new THREE.Vector3( this.config.spin.axis.x, this.config.spin.axis.y, this.config.spin.axis.z ).normalize(); // always orbit on Y
		this.rotationSpeed = this.config.spin.speed; // length of planet day

		this.orbitAxis = new THREE.Vector3( this.config.orbit.axis.x, this.config.orbit.axis.y, this.config.orbit.axis.z ).normalize(); // y,z for orbit AXIS
		this.orbitSpeed = this.config.orbit.speed; // length of planet year
	};

	OrbitingObject.prototype = Object.create( THREE.Mesh.prototype );
	OrbitingObject.prototype._matrixUpdate = THREE.Object3D.prototype.updateMatrix;
	OrbitingObject.prototype._updateMatrixWorld = THREE.Object3D.prototype.updateMatrixWorld;
	
	OrbitingObject.prototype.updateMatrix = function() {

		var dta = delta || 0;

		if ( this.parent instanceof OrbitingObject ) {
			this.position.applyAxisAngle(this.orbitAxis, this.orbitSpeed * dta);
		}

		this.rotateOnAxis(this.rotationAxis, this.rotationSpeed * dta);
		this._matrixUpdate();
	};
	
	OrbitingObject.prototype.updateMatrixWorld = function() {
		if ( this.matrixAutoUpdate === true ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate === true || force === true ) {

			if ( this.parent === undefined ) {
				this.matrixWorld.copy( this.matrix );
			} else {
				v = new THREE.Vector3();
				v.applyMatrix4(this.parent.matrixWorld);
				v.add(this.position);

				this.matrixWorld.compose(v, this.quaternion, this.scale);

			}

			this.matrixWorldNeedsUpdate = false;
			force = true;

		}

		// update children
		for ( var i = 0, l = this.children.length; i < l; i ++ ) {
			this.children[ i ].updateMatrixWorld( force );
		}
	};