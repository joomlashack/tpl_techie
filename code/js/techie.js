jQuery(function() {
	
	function contentHasContent () {
		jQueryContentChildren = jQuery('#main-content').children();
		jQueryContentChildren.each(function () {
			if (jQuery(this).is('aside')) {
					if (jQuery(this).children().length > 0) {
						jQuery('#main-content').addClass('content');
						return;
					}
			}
			jQuerySubChildren = jQuery(this).children();
			jQuerySubChildren.each(function () {
				jQueryHasChildren = jQuery(this).children();
			if (jQueryHasChildren.length > 0 )  {
				jQuery('#main-content').addClass('content');
				return;
			}
			});
		});
	}
	
	contentHasContent ();

});