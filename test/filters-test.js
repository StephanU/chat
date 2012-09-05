var buster = require('buster'),
	fake = require('./couch-fakerequest')

buster.testCase("chatMessages", {
	"if it is a function": function() {
		// the function we want to test
		var fun = fake.createFunctionFromFile("filters/chatMessages.js");
		// assert the function
		assert.isFunction(fun,"list is not defined!");
	}
});