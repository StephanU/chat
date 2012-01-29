function (e, params) {
	var widget = $(this);
	var state = $$(this);

	if (params.id && params.id !== "") {
		// if an id is given, start this chat
		widget.trigger("doChat", { "id" : params.id});
	} else {
		// create new chat
		var chat = {
			"type" : "chat",
			"time" : new Date().toString()
		};

		state.app.db.saveDoc(chat, {
			"success" : function (result) {
				widget.trigger("doChat", { "id" : result.id});
			},
			"error" : function(jqXHR, textStatus, errorThrown) {
				$.log(textStatus);
			}
		});
	}
};