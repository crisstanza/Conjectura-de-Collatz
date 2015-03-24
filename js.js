(function() {

	function start() {
		var jsus = new JSUS(ConjecturaDeCollatzTest);
		jsus.start('display');
		jsus.end();
	}

	window.addEventListener('load', start, false);

})();
