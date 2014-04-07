jQuery(function() {
	
	function contentHasContent () {
		jQueryContentChildren = jQuery('#main-content').children();
		jQueryContentChildren.each(function () {
			jQuerySubChildren = jQuery(this).children();
			jQuerySubChildren.each(function () {
				jQueryHasChildren = jQuery(this).children();
				console.log(jQueryHasChildren);
			if (jQueryHasChildren.length > 0 )  {
				jQuery('#main-content').addClass('content');
			}
			});
		});
	}
	
	contentHasContent ();

});