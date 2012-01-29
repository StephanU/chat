function (doc, req) {
	if(doc.chatid === req.query.id && doc.type === "message") {
		return true;
  	}
  	return false;
}