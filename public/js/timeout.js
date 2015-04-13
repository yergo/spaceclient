/**
 * Timeout singleton to not produce stacket timeouts;
 * @type Function|Function
 */
var Timer = (function() {
	var timers = [];

	return function(callback, ms) {

		if (timers[callback]) {
			clearTimeout(timers[callback]);
		}
		
		timers[callback] = setTimeout(callback, ms);
	};
})();
