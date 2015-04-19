var Textures = function(kind, count) {
	pt = this;
	
	pt.textures = (function(){
		result = [];
		for(var i = 1; i <= count; i++) {
			var x = new THREE.ImageUtils.loadTexture('img/textures/' + kind + '/0' + i.toString() + '.png');
//			x.wrapS = x.wrapT = THREE.ClampToEdgeWrapping;// THREE.RepeatWrapping;
//			x.minFilter = THREE.LinearFilter;
			result.push(x);
		}
		
		return result;
	})(kind, count);
	
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
};