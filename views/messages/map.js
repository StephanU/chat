function(doc) {
	if(doc.type === "message") {
		emit(doc.chatid, doc);
	}
}