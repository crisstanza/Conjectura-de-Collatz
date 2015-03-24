var ConjecturaDeCollatz = function(n) {
	this.n = n
	this.size = undefined;
	this.result = undefined;
};

(function() {

	var SEP = ',';

	function isEven(n) {
		return n % 2 == 0;
	}

	ConjecturaDeCollatz.prototype.toString = function(first) {
		if (this.result == undefined) {
			var i = this.n;
			var buffer = [i];
			while (i > 1) {
				if (isEven(i)) {
					i = i / 2;
				} else {
					i = i*3 + 1;
				}
				buffer.push(i);
			}
			this.result = buffer.join(ConjecturaDeCollatz.SEP);
		}
		return this.result;
	};

	ConjecturaDeCollatz.prototype.getSize = function(first) {
		if (this.size == undefined) {
			var sizeTmp = 1;
			var i = this.n;
			var buffer = [i];
			while (i > 1) {
				if (isEven(i)) {
					i = i / 2;
					sizeTmp++;
				} else {
					i = i*3 + 1;
					sizeTmp++;
				}
			}
			this.size = sizeTmp;
		}
		return this.size;
	};

})();
