Template.registerHelper('pluralize', function(n, thing){
	// fairly stupid pluarlizer
	if (n === 1) {
		return '1 ' + thing;
	} else {
		return n + ' ' + thing + 's';
	}
});