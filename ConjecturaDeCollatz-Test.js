function ConjecturaDeCollatzTest() {
}

/*
ConjecturaDeCollatzTest.beforeClass = function() {};
ConjecturaDeCollatzTest.afterClass = function() {};
ConjecturaDeCollatzTest.prototype.before = function() {};
ConjecturaDeCollatzTest.prototype.after = function() {};
*/


/************************************************************************
 * toString *************************************************************
 ************************************************************************/

ConjecturaDeCollatzTest.prototype.test1 = function() {
	{
		var n = 1;
		var cdc = new ConjecturaDeCollatz(n);
	}
	var expected = '1';
	var current = cdc.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

ConjecturaDeCollatzTest.prototype.test2 = function() {
	{
		var n = 2;
		var cdc = new ConjecturaDeCollatz(n);
	}
	var expected = '2,1';
	var current = cdc.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

ConjecturaDeCollatzTest.prototype.test3 = function() {
	{
		var n = 3;
		var cdc = new ConjecturaDeCollatz(n);
	}
	var expected = '3,10,5,16,8,4,2,1';
	var current = cdc.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

ConjecturaDeCollatzTest.prototype.test999 = function() {
	{
		var n = 999;
		var cdc = new ConjecturaDeCollatz(n);
	}
	var expected = ',1';
	var current = cdc.toString();
	{
		JSUS.assertEndsWith(current, expected);
	}
};

ConjecturaDeCollatzTest.prototype.test999999 = function() {
	{
		var n = 999999;
		var cdc = new ConjecturaDeCollatz(n);
	}
	var expected = '999999,';
	var current = cdc.toString();
	{
		JSUS.assertStartsWith(current, expected);
	}
};


/************************************************************************
 * getSize *************************************************************
 ************************************************************************/

ConjecturaDeCollatzTest.prototype.testSize1 = function() {
	{
		var n = 1;
		var cdc = new ConjecturaDeCollatz(n);
	}
	var expected = 1;
	var current = cdc.getSize();
	{
		JSUS.assertEquals(expected, current);
	}
};

ConjecturaDeCollatzTest.prototype.testSize2 = function() {
	{
		var n = 2;
		var cdc = new ConjecturaDeCollatz(n);
	}
	var expected = 2;
	var current = cdc.getSize();
	{
		JSUS.assertEquals(expected, current);
	}
};

ConjecturaDeCollatzTest.prototype.testSize3 = function() {
	{
		var n = 3;
		var cdc = new ConjecturaDeCollatz(n);
	}
	var expected = 8;
	var current = cdc.getSize();
	{
		JSUS.assertEquals(expected, current);
	}
};
