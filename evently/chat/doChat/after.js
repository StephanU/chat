function (e, params) {
	var widget = $(this);
	var state = $$(this);

	var template = state.app.ddoc.templates.message;
	var messagesDiv = $("#messages");
	messagesDiv.evently("appendElement", state.app);

	// subscribe to changes feed of this chat starting at seq 1
	var feed = state.app.db.changes(1 ,{
		"filter" : "chat/chatMessages",
		"id" : params.id,
		"include_docs":true
	});
	
	feed.onChange(function (response) {
		response.results.forEach(function (row) {
			messagesDiv.trigger("append", {
				"template" : template,
				"values" : row.doc
			});
			messagesDiv.scrollTop(messagesDiv[0].scrollHeight);
		});
	});

	// set the focus on the "your name" input field
	$('input[id=name]', this).trigger("focus");

	state.app.req.query.id = params.id;
};