function () {
	var widget = $(this);
	var id = $('input[id=id]', this).val();

	widget.trigger("openChat", { "id" : id});

	return false;
};