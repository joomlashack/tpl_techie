jQuery(function() {

	// Content on the main page

	function contentHasContent() {
		
		jQueryContentChildren = jQuery('#main-content').children();
		jQueryContentChildren.each(function() {
			if (jQuery(this).is('aside')) {
				if (jQuery(this).children().length) {
					jQuery('#main-content').addClass('content');
					return;
				}
			}
			jQuerySubChildren = jQuery(this).children();
			jQuerySubChildren.each(function() {
			
				if (jQuery(this).is('#system-message-container')) {
					var jQuerySystemMessageChildren = jQuery(this).children();
					var hasSystemMessageChildren = false;
					if (jQuerySystemMessageChildren.length) {
						hasSystemMessageChildren = true;
						jQuerySystemMessageChildren.each(function() {
							if (jQuery(this).is('#system-message')) {
								if (jQuery(this).children().length) {
									jQuery('#main-content').addClass('content');
									return;
								}
							}
								
						});
					} 
				}
								
				jQueryHasChildren = jQuery(this).children();
				if (jQueryHasChildren.length && !hasSystemMessageChildren) {
					jQuery('#main-content').addClass('content');
					return;
				}
			});
		});
	}

	contentHasContent();

	// Lateral-menu

	jQuery('.toolbar-collapse-btn').click(function() {
		var istMenuVisible = jQuery('#lateral-menu').is(':visible');
		lateralMenu(istMenuVisible);
	});

	function lateralMenu(istMenuVisible) {
		if (!istMenuVisible) {
			var lateralMenuWidth = jQuery('#lateral-menu').width();
			jQuery('.techie-container').animate({
				right : lateralMenuWidth
			}, 500, animationFinishOpen);
			jQuery('#lateral-menu').show();
			jQuery('.navbar-fixed-top').addClass('navbar-fixed-top-menu-open');
			jQuery('#lateral-menu').bind('mouseleave', animationClose);
		} else {
			animationClose();
		}

		function animationClose() {
			jQuery('.techie-container').animate({
				right : '0px'
			}, 500, animationFinishClose);
			jQuery('#lateral-menu').removeClass('show-lateral-menu');
		}

		function animationFinishClose() {
			jQuery('#lateral-menu').hide();
			jQuery('.navbar-fixed-top').removeClass(
					'navbar-fixed-top-menu-open');
			jQuery('#lateral-menu').unbind('mouseleave');
			jQuery('.techie-container').unbind('click', animationClose);
		}

		function animationFinishOpen() {
			jQuery('#lateral-menu').addClass('show-lateral-menu');
		}

	}

	// Fixing fluid layout and IE 8

	function getInternetExplorerVersion() {
		var rv = 10;
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
				rv = parseFloat(RegExp.$1);
		}

		if (rv < 9) {
			return true;
		} else {
			return false;
		}
	}

	if (BsModeFluid || getInternetExplorerVersion()) {
		fixMountedForFixedLayout();
		jQuery(window).resize(function() {
			fixMountedForFixedLayout();
		});
	}

	function fixMountedForFixedLayout() {
		var jQuerypreMountedElement = jQuery('.mounted').prev('.module');
		if (jQuerypreMountedElement.length && BsModeFluid) {
			if (jQuery(window).widht > '768') {
				var ParentElement = jQuerypreMountedElement.height() - 30;
				jQuery('*[class^="module"] ~ .mounted').height(ParentElement);
			} else {
				jQuery('*[class^="module"] ~ .mounted').removeAttr('style');
			}
		}
		if (jQuerypreMountedElement.length && getInternetExplorerVersion()) {
			jQuery('.mounted > [class^="module"]').width(
					jQuery('.mounted').width());
		}
	}

	if (jQuery('.highlight').length) {
		jQuery('.highlight').parent().addClass('highlight-parent');
	}

});