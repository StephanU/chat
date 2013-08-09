function () {
	var widget = $(this),
		state = $$(this),
		message = {
			"chatid" : $('input[id=id]', this).val(),
			"type" : "message",
			"time" : new Date().toString(),
			"name" : $('input[id=name]', this).val(),
			"message" : $('input[id=message]', this).val()
		};

	if (message.message && message.message !== "") {
		// save the message
		widget.trigger("saveMessage", {
			"message" : message
		});
	}

	// empty the message box
	$('input[id=message]', this).val("");
	// and set the focus on it
	$('input[id=message]', this).trigger("focus");

	return false;
}
