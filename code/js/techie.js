jQuery(function() {

    // Slideshow 

    function RenderElements() {

        var renderElment = [];
        var slideItem = [];
        var showSlideContentClass = 'show-slide-content';

        for (var i = 0; i < slidesImgs.length; i++) {

            if (i > 0) {
                showSlideContentClass = 'hide-slide-content';
            }

            renderElment.push('<div class="current-slide-item item ' + showSlideContentClass + '" id ="slide-text-' + i + '">');
            renderElment.push('<h1>' + slidesImgs[i].title + '</h1>');
            renderElment.push('<p>' + slidesImgs[i].content + '</p>');
            renderElment.push('</div>');
            var stringArray = renderElment.join("");
        };

        jQuery('#slide-text-element').html(stringArray);

    }


    jQuery.supersized({
        // Functionality
        slideshow: SlideShow, // Slideshow on/off
        autoplay: 1, // Slideshow starts playing automatically
        start_slide: 1, // Start slide (0 is random)
        stop_loop: 0, // Pauses slideshow on last slide
        random: 0, // Randomize slide order (Ignores start slide)
        slide_interval: 12000, // Length between transitions
        transition: 3, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 300, // Speed of transition
        new_window: 1, // Image links open in new window/tab
        pause_hover: 1, // Pause slideshow on hover
        keyboard_nav: 1, // Keyboard navigation on/off
        performance: 1, // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
        image_protect: 1, // Disables image dragging and right click with Javascript

        // Size & Position
        min_width: 0, // Min width allowed (in pixels)
        min_height: 0, // Min height allowed (in pixels)
        vertical_center: 0, // Vertically center background
        horizontal_center: 1, // Horizontally center background
        fit_always: 0, // Image will never exceed browser width or height (Ignores min. dimensions)
        fit_portrait: 0, // Portrait images will not exceed browser height
        fit_landscape: 0, // Landscape images will not exceed browser width

        // Components
        slide_links: 'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        thumb_links: 0, // Individual thumb links for each slide
        thumbnail_navigation: 0, // Thumbnail navigation

        slides: slidesImgs,
        // Theme Options
        progress_bar: 0, // Timer for each slide
        mouse_scrub: 0
    });


    RenderElements();

    jQuery('#prevslide').click(function() {
        api.prevSlide();
    });


    jQuery('#nextslide').click(function() {
        api.nextSlide();
    });

    theme = {
        _init: function() {
            jQuery('#slide-text-' + vars.current_slide).show('fast').addClass('current-content');
            api.resizeNow();
        },
        afterAnimation: function() {
            jQuery('.current-content').hide().removeClass('current-content');
            jQuery('#slide-text-' + vars.current_slide).fadeIn('fast').addClass('current-content');
            api.resizeNow();
        }
    }






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
                right: lateralMenuWidth
            }, 500, animationFinishOpen);
            jQuery('#lateral-menu').show();
            jQuery('.navbar-fixed-top').addClass('navbar-fixed-top-menu-open');
        } else {
            animationClose();
        }

        function animationClose() {
            jQuery('.techie-container').animate({
                right: '0px'
            }, 500, animationFinishClose);
            jQuery('#lateral-menu').removeClass('show-lateral-menu');
        }

        function animationFinishClose() {
            jQuery('#lateral-menu').hide();
            jQuery('.navbar-fixed-top').removeClass(
                'navbar-fixed-top-menu-open');
            jQuery('#lateral-menu').unbind('mouseleave');
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