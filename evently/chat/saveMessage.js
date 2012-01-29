function (e, params) {
	var state = $$(this);

	// save the message
	state.app.db.saveDoc(params.message, {
		"error" : function(jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
		}
	});
};