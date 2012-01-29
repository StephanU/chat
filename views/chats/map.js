function(doc) {
	if(doc.type === "chat") {
		emit(null, doc);
	}
}