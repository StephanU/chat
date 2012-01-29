function (e, params) {
	var state = $$(this);
	var Mustache = state.app.require("vendor/couchapp/lib/mustache");

    return {
    	"element" : Mustache.to_html(params.template, params.values)
    };
};