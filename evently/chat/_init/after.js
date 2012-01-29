function (e, params) {
	var state = $$(this);

	// when a chat id was giving via the request parameter "id", then open it
	if (state.app.req.query.id) {
		// set the id
		$('input[id=id]', this).val(state.app.req.query.id);
		// trigger the submit
		$('form > button', this).trigger("click");
	}

	// set the focus on the "new chat" button
	$('form > button', this).trigger("focus");
}