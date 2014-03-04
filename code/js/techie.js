jQuery(function() {
	jQuery('.toolbar-collapse-btn').click(function () {
		jQuery('.navbar-fixed-top').css('position','relative');
		jQuery('body').animate({right: '300px'},500);
		jQuery('.lateral-menu-wrapper').show();
	});
});