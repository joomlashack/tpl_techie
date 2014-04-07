jQuery(function() {
	
	// Content on the main page
	
	function contentHasContent () {
		jQueryContentChildren = jQuery('#main-content').children();
		jQueryContentChildren.each(function () {
			if (jQuery(this).is('aside')) {
					if (jQuery(this).children().length) {
						jQuery('#main-content').addClass('content');
						return;
					}
			}
			jQuerySubChildren = jQuery(this).children();
			jQuerySubChildren.each(function () {
				jQueryHasChildren = jQuery(this).children();
			if (jQueryHasChildren.length)  {
				jQuery('#main-content').addClass('content');
				return;
			}
			});
		});
	}
	
	contentHasContent ();
	
	// Lateral-menu
	
	
	jQuery('.toolbar-collapse-btn').click(function () {
		var istMenuVisible = jQuery('#lateral-menu').is(':visible');
		lateralMenu (istMenuVisible);
	});
	
	function lateralMenu(istMenuVisible) {
		if (!istMenuVisible) {		
		jQuery('.techie-container').animate({right: '390px'}, 500, animationFinishOpen);
		jQuery('#lateral-menu').show();
		jQuery('.navbar-fixed-top').addClass('navbar-fixed-top-menu-open');
		} else {
			jQuery('.techie-container').animate({right: '0px'}, 500, animationFinishClose);	
			jQuery('#lateral-menu').removeClass('show-lateral-menu');
		}
		
		function animationFinishClose() {
			jQuery('#lateral-menu').hide();
			jQuery('.navbar-fixed-top').removeClass('navbar-fixed-top-menu-open');
		}
		
		function animationFinishOpen() {
			jQuery('#lateral-menu').addClass('show-lateral-menu');
		}
		
	}
	
	// Fixing fluid layout and IE 8
	
	if (BsModeFluid) {
		fixMountedForFixedLayout ();
		jQuery(window).resize(function () {
			fixMountedForFixedLayout ();
		});
	}
	
	function fixMountedForFixedLayout () {
		var jQuerypreMountedElement = jQuery('.mounted').prev('.module');
		console.log(jQuerypreMountedElement);
		if (jQuerypreMountedElement.length) {
			if (jQuery(window).widht > '768') {
			var ParentElement = jQuerypreMountedElement.height() - 30;
			jQuery('*[class^="module"] ~ .mounted').height(ParentElement);
			} else {
				jQuery('*[class^="module"] ~ .mounted').removeAttr('style');
			}
		}
	}
	
	
	
	
});