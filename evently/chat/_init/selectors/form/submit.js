function () {
	var id = $('input[id=id]', this).val();

	$.pathbinder.go("/" + id); 

	return false;
}
