@@ -1,12 +1,12 @@
jQuery(window).load(function($) {
jQuery(window).load(function ($) {
	var $ = jQuery;
	
  $('img').each(function() {
    if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
      // image was broken, replace with your new image
      this.src = "http://placehold.it/" + ($(this).attr('width') || this.width || $(this).naturalWidth()) + "x" + (this.naturalHeight || $(this).attr('height') || $(this).height());
    }
  });

	$('img').each(function () {
		if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
			// image was broken, replace with your new image
			this.src = "http://placehold.it/" + ($(this).attr('width') || this.width || $(this).naturalWidth()) + "x" + (this.naturalHeight || $(this).attr('height') || $(this).height());
		}
	});
});

//Radio, Checkbox and Select
@@ -19,7 +19,7 @@ function formStylization() {
	$('input[type="checkbox"]:checked').parent('.new-checkbox').addClass('checked');
	$('input[type="radio"]:checked').parent('.new-radio').addClass('checked');
	$('input[type="radio"]:disabled, input[type="checkbox"]:disabled').parent().addClass('disabled');
	$('html').click(function(){
	$('html').click(function () {
		$('input[type="radio"]').parent('.new-radio').removeClass('checked');
		$('input[type="radio"]:checked').parent('.new-radio').addClass('checked');
		$('input[type="checkbox"]').parent('.new-checkbox').removeClass('checked');
@@ -28,129 +28,129 @@ function formStylization() {
		$('input[type="radio"]:disabled, input[type="checkbox"]:disabled').parent().addClass('disabled');
	});
	$('select').selectbox();
	

	$('.home-filter .sbHolder, .ibr-properties-filter .sbHolder').each(function () {
		var element = $(this).find('ul.sbOptions li:first a');
		var text    = element.text();
		var text = element.text();
		element.html('- Any -');
	});
	
	$('body').on('change', 'select', function() {

	$('body').on('change', 'select', function () {
		$('#sbSelector_' + $(this).attr('sb')).text($(this).find('option:selected').text());
	});
}
	

//Home (Map)
function optionHomeMap() {
	var $                  = jQuery,
		filter             = $('#main .home-filter'),
		filterContent      = $('#main .home-filter .filter-content'),
		filterButton       = $('#main .home-filter .filter-button'),
		filterHeight       = $('#main .home-filter .filter-content').outerHeight(),
		filterWidth        = $('#main .home-filter .filter-content').outerWidth(),
		filterButtonWidth  = $('#main .home-filter .filter-button').outerWidth(),
		windowHeight       = $('body').height(),
		windowWidth        = $('body').width(),
		headerHeight       = $('#site-header').outerHeight(),
		tabHeight          = $('#main .home-tabs').outerHeight(),
		mapHeight          = windowHeight - headerHeight - tabHeight,
	var $ = jQuery,
		filter = $('#main .home-filter'),
		filterContent = $('#main .home-filter .filter-content'),
		filterButton = $('#main .home-filter .filter-button'),
		filterHeight = $('#main .home-filter .filter-content').outerHeight(),
		filterWidth = $('#main .home-filter .filter-content').outerWidth(),
		filterButtonWidth = $('#main .home-filter .filter-button').outerWidth(),
		windowHeight = $('body').height(),
		windowWidth = $('body').width(),
		headerHeight = $('#site-header').outerHeight(),
		tabHeight = $('#main .home-tabs').outerHeight(),
		mapHeight = windowHeight - headerHeight - tabHeight,
		marginTop;
	
	if ((filter.hasClass('filter-position-right')) || ( windowHeight < ( headerHeight + filterHeight + tabHeight + 60 ))) {

	if ((filter.hasClass('filter-position-right')) || (windowHeight < (headerHeight + filterHeight + tabHeight + 60))) {
		marginTop = headerHeight + 30;
	} else {
		marginTop = ( mapHeight - filterHeight) / 2 +  headerHeight;
		marginTop = (mapHeight - filterHeight) / 2 + headerHeight;
	}

	$('#map-canvas').css({
		height    : windowHeight,
		minHeight : headerHeight + filterHeight + tabHeight + 75,
		height: windowHeight,
		minHeight: headerHeight + filterHeight + tabHeight + 75,
	});
	

	$('.overlay-filter').css({
		top       : headerHeight,
		bottom    : filterHeight + tabHeight + 10,
		left      : filterWidth - filterButtonWidth
		top: headerHeight,
		bottom: filterHeight + tabHeight + 10,
		left: filterWidth - filterButtonWidth
	});
	

	if (filter.hasClass('open')) {
		if (filter.hasClass('filter-position-right') && $('body').width() >= 768) {
			filter.css({
				left  : windowWidth - filterButtonWidth - 30,
				top   : headerHeight + 30
				left: windowWidth - filterButtonWidth - 30,
				top: headerHeight + 30
			});
		} else {
			filter.css({
				left  : (windowWidth / 2) + (filterWidth / 2) - filterButtonWidth,
				top   : marginTop
				left: (windowWidth / 2) + (filterWidth / 2) - filterButtonWidth,
				top: marginTop
			});
		}
	} else {
		filterButton.html('Show filter <div class="flip"><span>+</span></div>');
		filter.css({
			left  : windowWidth - 136,
			top   : windowHeight - 109
			left: windowWidth - 136,
			top: windowHeight - 109
		});
	}

	$(filterButton).click(function() {
		var windowHeight       = $('body').height(),
			windowWidth        = $('body').width();
		
	$(filterButton).click(function () {
		var windowHeight = $('body').height(),
			windowWidth = $('body').width();

		if (filter.hasClass('open')) {
			filterContent.fadeOut('400', function() {
			filterContent.fadeOut('400', function () {
				filter.animate({
				left  : windowWidth - 136,
				top   : windowHeight - 109
			}, 400);
					left: windowWidth - 136,
					top: windowHeight - 109
				}, 400);
				filterButton.html('Show filter <div class="flip"><span>+</span></div>');
				filter.removeClass('open', 400 );
				filter.removeClass('open', 400);
			});
		} else {
			filterButton.html('Hide <div class="flip"><span>&#8211;</span></div>');
			if (filter.hasClass('filter-position-right')) {
				filter.animate({
					left  : windowWidth - filterButtonWidth - 30,
					top   : headerHeight + 30
					left: windowWidth - filterButtonWidth - 30,
					top: headerHeight + 30
				}, 400,
				function(){
					filterContent.fadeIn('400');
				});
					function () {
						filterContent.fadeIn('400');
					});
			} else {
				filter.animate({
					left  : (windowWidth / 2) + (filterWidth / 2) - filterButtonWidth,
					top   : marginTop
					left: (windowWidth / 2) + (filterWidth / 2) - filterButtonWidth,
					top: marginTop
				}, 400,
				function(){
					filterContent.fadeIn('400');
				});
					function () {
						filterContent.fadeIn('400');
					});
			}
			$(filter).addClass('open', 400 );
			$(filter).addClass('open', 400);
		}
		return false;
	});
	
	if ($('body').width() >= 980 ) {

	if ($('body').width() >= 980) {
		$("#main .home-filter").draggable({
			containment: '.overlay-filter',
			cursor: 'move',
			handle: '.move',
		});
	}
}
	

//Home (Best Agents)
function optionHomeAgents() {
	var $              = jQuery,
		windowHeight   = $('body').height(),
		carouselWidth  = $('#main .home-agents .row').width(),
		siteHeader     = $('#site-header').outerHeight(),
		agentsSize     = $('#main .home-content .agent').length,
		gridMargim     = $('#main .home-content .span4').css('margin-left'),
		marginTop      = $('#main .home-agents .row'),
	var $ = jQuery,
		windowHeight = $('body').height(),
		carouselWidth = $('#main .home-agents .row').width(),
		siteHeader = $('#site-header').outerHeight(),
		agentsSize = $('#main .home-content .agent').length,
		gridMargim = $('#main .home-content .span4').css('margin-left'),
		marginTop = $('#main .home-agents .row'),
		contentHeight;

	if ($('body').hasClass('main-menu-visible') && $('body').width() >= 980 ) {
	if ($('body').hasClass('main-menu-visible') && $('body').width() >= 980) {
		contentHeight = windowHeight - siteHeader - 109;
	} else {
		contentHeight = windowHeight - siteHeader - 109;
@@ -167,23 +167,23 @@ function optionHomeAgents() {
	if (marginTop621 < 0) {
		marginTop621 = 0;
	}
	

	$('#main .home-content .home-agents').css('height', contentHeight);
	

	if (carouselWidth > 1199) {
		if ( contentHeight > 700) {
		if (contentHeight > 700) {
			if (agentsSize > 6) {
				$('#main .home-content .home-carousel .span4:nth-child(3n)').each(function(){
				$('#main .home-content .home-carousel .span4:nth-child(3n)').each(function () {
					$(this).children('.agent').appendTo($(this).prev().prev());
					$(this).remove();
				});
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function(){
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function () {
					$(this).children('.agent').appendTo($(this).prev());
					$(this).remove();
				});
				marginTop.css('marginTop', marginTop621);
			} else if (agentsSize < 7 && agentsSize > 3) {
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function(){
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function () {
					$(this).children('.agent').appendTo($(this).prev());
					$(this).remove();
				});
@@ -193,7 +193,7 @@ function optionHomeAgents() {
			}
		} else if (contentHeight < 701 && contentHeight > 483) {
			if (agentsSize > 3) {
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function(){
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function () {
					$(this).children('.agent').appendTo($(this).prev());
					$(this).remove();
				});
@@ -205,19 +205,19 @@ function optionHomeAgents() {
			marginTop.css('marginTop', marginTop187);
		}
	} else if (carouselWidth < 1200 && carouselWidth > 779) {
		if ( contentHeight > 700) {
		if (contentHeight > 700) {
			if (agentsSize > 4) {
				$('#main .home-content .home-carousel .span4:nth-child(3n)').each(function(){
				$('#main .home-content .home-carousel .span4:nth-child(3n)').each(function () {
					$(this).children('.agent').appendTo($(this).prev().prev());
					$(this).remove();
				});
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function(){
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function () {
					$(this).children('.agent').appendTo($(this).prev());
					$(this).remove();
				});
				marginTop.css('marginTop', marginTop621);
			} else if (agentsSize < 5 && agentsSize > 2) {
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function(){
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function () {
					$(this).children('.agent').appendTo($(this).prev());
					$(this).remove();
				});
@@ -227,7 +227,7 @@ function optionHomeAgents() {
			}
		} else if (contentHeight < 701 && contentHeight > 483) {
			if (agentsSize > 2) {
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function(){
				$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function () {
					$(this).children('.agent').appendTo($(this).prev());
					$(this).remove();
				});
@@ -239,18 +239,18 @@ function optionHomeAgents() {
			marginTop.css('marginTop', marginTop187);
		}
	} else {
		if ( contentHeight > 700) {
			$('#main .home-content .home-carousel .span4:nth-child(3n)').each(function(){
		if (contentHeight > 700) {
			$('#main .home-content .home-carousel .span4:nth-child(3n)').each(function () {
				$(this).children('.agent').appendTo($(this).prev().prev());
				$(this).remove();
			});
			$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function(){
			$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function () {
				$(this).children('.agent').appendTo($(this).prev());
				$(this).remove();
			});
			marginTop.css('marginTop', marginTop621);
		} else if (contentHeight < 701 && contentHeight > 483) {
			$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function(){
			$('#main .home-content .home-carousel .span4:nth-child(2n)').each(function () {
				$(this).children('.agent').appendTo($(this).prev());
				$(this).remove();
			});
@@ -263,16 +263,16 @@ function optionHomeAgents() {

//Home (Best Properties)
function optionHomeProperties() {
	var $             = jQuery,
		windowHeight  = $('body').height(),
	var $ = jQuery,
		windowHeight = $('body').height(),
		carouselWidth = $('#main .properties .row').width(),
		siteHeader    = $('#site-header').outerHeight(),
		propertySize  = $('#main .home-content .property').length,
		gridMargim    = $('#main .home-content .span3').css('margin-left'),
		marginTop     = $('#main .home-content .properties .row'),
		siteHeader = $('#site-header').outerHeight(),
		propertySize = $('#main .home-content .property').length,
		gridMargim = $('#main .home-content .span3').css('margin-left'),
		marginTop = $('#main .home-content .properties .row'),
		contentHeight;
		
	if ($('body').hasClass('main-menu-visible') && $('body').width() >= 980 ) {

	if ($('body').hasClass('main-menu-visible') && $('body').width() >= 980) {
		contentHeight = windowHeight - siteHeader - 109;
	} else {
		contentHeight = windowHeight - siteHeader - 109;
@@ -285,11 +285,11 @@ function optionHomeProperties() {
	if (marginTop620 < 0) {
		marginTop620 = 0;
	}
	

	$('#main .home-content .properties').css('height', contentHeight);
	if (carouselWidth > 1199) {
		if ( contentHeight >= 698 && propertySize > 4) {
			$('.home-content .home-carousel .span3:odd').each(function(){
		if (contentHeight >= 698 && propertySize > 4) {
			$('.home-content .home-carousel .span3:odd').each(function () {
				$(this).children('.property').appendTo($(this).prev());
				$(this).remove();
			});
@@ -298,8 +298,8 @@ function optionHomeProperties() {
			marginTop.css('marginTop', marginTop296);
		}
	} else if (carouselWidth < 1200 && carouselWidth > 869) {
		if ( contentHeight >= 698 && propertySize > 3) {
			$('.home-content .home-carousel .span3:odd').each(function(){
		if (contentHeight >= 698 && propertySize > 3) {
			$('.home-content .home-carousel .span3:odd').each(function () {
				$(this).children('.property').appendTo($(this).prev());
				$(this).remove();
			});
@@ -308,8 +308,8 @@ function optionHomeProperties() {
			marginTop.css('marginTop', marginTop296);
		}
	} else if (carouselWidth < 870 && carouselWidth > 559) {
		if ( contentHeight >= 698 && propertySize > 2) {
			$('.home-content .home-carousel .span3:odd').each(function(){
		if (contentHeight >= 698 && propertySize > 2) {
			$('.home-content .home-carousel .span3:odd').each(function () {
				$(this).children('.property').appendTo($(this).prev());
				$(this).remove();
			});
@@ -318,8 +318,8 @@ function optionHomeProperties() {
			marginTop.css('marginTop', marginTop296);
		}
	} else {
		if ( contentHeight >= 698) {
			$('.home-content .home-carousel .span3:odd').each(function(){
		if (contentHeight >= 698) {
			$('.home-content .home-carousel .span3:odd').each(function () {
				$(this).children('.property').appendTo($(this).prev());
				$(this).remove();
			});
@@ -333,58 +333,58 @@ function optionHomeProperties() {

//Home (Best Property)
function optionHomeProperty() {
	var $                 = jQuery,
		windowHeight      = $('body').height(),
		siteHeader        = $('#site-header').outerHeight(),
		contentWidth      = $('body').width(),
		contentHeight     = windowHeight - siteHeader - 109;
	
	if (contentWidth/contentHeight > 1.8) {
	var $ = jQuery,
		windowHeight = $('body').height(),
		siteHeader = $('#site-header').outerHeight(),
		contentWidth = $('body').width(),
		contentHeight = windowHeight - siteHeader - 109;

	if (contentWidth / contentHeight > 1.8) {
		if ((contentHeight * 1.8) < 320) {
			$('#main .home-content .property-one .property').css('width', 320);
		} else {
			$('#main .home-content .property-one .property').css('width', contentHeight * 1.78);
		}
	}
	
	var propertyWidth  = $('.property-one .property').outerWidth(),

	var propertyWidth = $('.property-one .property').outerWidth(),
		propertyHeight = $('.property-one .property').outerHeight(),
		propertyClass,
		marginTop;
		
	if (((contentHeight - (propertyWidth/1.8) - 50) / 2) > 0) {
		marginTop = (contentHeight - (propertyWidth/1.8) - 50) / 2;

	if (((contentHeight - (propertyWidth / 1.8) - 50) / 2) > 0) {
		marginTop = (contentHeight - (propertyWidth / 1.8) - 50) / 2;
	} else {
		marginTop = 0;
	}
		
	if (propertyWidth/propertyHeight < 1.8) {

	if (propertyWidth / propertyHeight < 1.8) {
		$('#main .home-content .property-one .property').css({
			height    : propertyWidth/1.8,
			marginTop : marginTop
			height: propertyWidth / 1.8,
			marginTop: marginTop
		});
	}
	

	$('#main .home-content .property-one').css({
		height    : contentHeight,
		minHeight : contentHeight
		height: contentHeight,
		minHeight: contentHeight
	});
	

	if (propertyWidth < 980 && propertyWidth > 768) {
		propertyClass = 'property-768';
	} else if (propertyWidth < 768) {
		propertyClass = 'property-320';
	}
	

	$('.property-one .property').addClass(propertyClass);
	

	$('.tooltip-link').tooltip();
}

//Video Pley
function playVideo() {
    var $ = jQuery;
    if ($('body').hasClass('ibr-tab-slider')) {
	var $ = jQuery;
	if ($('body').hasClass('ibr-tab-slider')) {
		$('.slider-slides .slide').each(function (i) {
			if ($(this).find('video').length) {
				if (i === 0) {
@@ -395,173 +395,170 @@ function playVideo() {
				}
			}
		});
    }
	}
}

//Home (Sliders)
function optionHomeSliders() {
	var $                 = jQuery,
		windowHeight      = $('body').height(),
		siteHeader        = $('#site-header').outerHeight(),
		contentWidth      = $('body').width(),
		contentHeight     = windowHeight - siteHeader,
		slider            = $('#main .slider-content'),
		slide             = $('#main .home-slider .slide'),
		slideContent      = $('#main .home-slider.type-content .slide'),
		slideProperty     = $('#main .home-slider.type-property .slide');
	
	var $ = jQuery,
		windowHeight = $('body').height(),
		siteHeader = $('#site-header').outerHeight(),
		contentWidth = $('body').width(),
		contentHeight = windowHeight - siteHeader,
		slider = $('#main .slider-content'),
		slide = $('#main .home-slider .slide'),
		slideContent = $('#main .home-slider.type-content .slide'),
		slideProperty = $('#main .home-slider.type-property .slide');

	$('#main .home-content .home-slider').css({
		height : windowHeight,
		height: windowHeight,
	});
	

	if (windowHeight < 700) {
		$('#main .home-content .home-slider').addClass('mini');
	} else {
		$('#main .home-content .home-slider').removeClass('mini');
	}
	

	if (slideContent.length) {
		$('#main .home-slider.type-content .slider-slides').carouFredSel({
			responsive : true,
			auto       : false,
			pagination : slider.find('.pagination'),
			next       : slider.find('.next'),
			prev       : slider.find('.prev'),
			swipe : {
			responsive: true,
			auto: false,
			pagination: slider.find('.pagination'),
			next: slider.find('.next'),
			prev: slider.find('.prev'),
			swipe: {
				onMouse: true,
				onTouch: true,
			},
			height     : 'auto',
			items : {
			height: 'auto',
			items: {
				visible: 1,
			},
			scroll : {
				onAfter :function () { playVideo(); }
			scroll: {
				onAfter: function () { playVideo(); }
			}
		});
	}

	if (slideProperty.length) {
		$('#main .home-slider.type-property .slider-slides').carouFredSel({
			responsive : true,
			auto : {
				progress : {
					bar  : slider.find('.timer'),
			responsive: true,
			auto: {
				progress: {
					bar: slider.find('.timer'),
				},
				timeoutDuration : 4000,
				timeoutDuration: 4000,
			},
			next       : slider.find('.next'),
			prev       : slider.find('.prev'),
			swipe : {
			next: slider.find('.next'),
			prev: slider.find('.prev'),
			swipe: {
				onMouse: true,
				onTouch: true,
			},
			height     : 'auto',
			items : {
			height: 'auto',
			items: {
				visible: 1,
			},
		});
		

		if ($('#main .home-slider.type-property .slide').length === 1) {
			$('#main .home-slider.type-property .timer').addClass('hidden');
		}
	}
	

	//Natural width/height images
	var props = ['Width', 'Height'],
		prop;

    while (prop = props.pop()) {
	while (prop = props.pop()) {
		(function (natural, prop) {
			$.fn[natural] = (natural in new Image()) ? 
			function () {
				return this[0][natural];
			} : 
			function () {
				var node = this[0],
					img,
					value;
					
				if (node.tagName.toLowerCase() === 'img') {
					img = new Image();
					img.src = node.src;
					value = img[prop];
				}
				return value;
			};
			$.fn[natural] = (natural in new Image()) ?
				function () {
					return this[0][natural];
				} :
				function () {
					var node = this[0],
						img,
						value;

					if (node.tagName.toLowerCase() === 'img') {
						img = new Image();
						img.src = node.src;
						value = img[prop];
					}
					return value;
				};
		}('natural' + prop, prop.toLowerCase()));
    }
	
	var slideHeight    = slide.outerHeight(),
		slideWidth     = slide.outerWidth();
	
	slide.each(function() {
		var slideImg          = $(this).children('.slide-image').children('img');
		
	}

	var slideHeight = slide.outerHeight(),
		slideWidth = slide.outerWidth();

	slide.each(function () {
		var slideImg = $(this).children('.slide-image').children('img');

		if (slideImg.length) {
			var	slideImgWidthN    = slideImg.naturalWidth(),
				slideImgHeightN   = slideImg.naturalHeight(),
			var slideImgWidthN = slideImg.naturalWidth(),
				slideImgHeightN = slideImg.naturalHeight(),
				slideImgWidth,
				imgMarginLeft;

			if ((slideWidth / slideHeight) < (slideImgWidthN / slideImgHeightN))
			{

			if ((slideWidth / slideHeight) < (slideImgWidthN / slideImgHeightN)) {
				slideImg.css({
					height     : '100%',
					maxWidth   : 'inherit',
					minWidth   : '100%',
					width      : 'auto'
					height: '100%',
					maxWidth: 'inherit',
					minWidth: '100%',
					width: 'auto'
				});
				
				slideImgWidth    = slideImg.width();

				slideImgWidth = slideImg.width();
				imgMarginLeft = (slideWidth - slideImgWidth) / 2;
				

				slideImg.css({
					marginLeft : imgMarginLeft
					marginLeft: imgMarginLeft
				});
			}
			else
			{
			else {
				slideImg.css({
					height     : 'auto',
					maxWidth   : '100%',
					width      : '100%'
					height: 'auto',
					maxWidth: '100%',
					width: '100%'
				});
				
				slideImgWidth    = slideImg.width();

				slideImgWidth = slideImg.width();
				imgMarginLeft = (slideWidth - slideImgWidth) / 2;
				

				slideImg.css({
					marginLeft : 0
					marginLeft: 0
				});
			}
		}
	});
	
	slide.each(function() {
		var slideVideo        = $(this).children('.slide-image').children('video'),
			slideVideoHeight  = slideVideo.height(),
			slideVideoWidth   = slideVideo.width(),

	slide.each(function () {
		var slideVideo = $(this).children('.slide-image').children('video'),
			slideVideoHeight = slideVideo.height(),
			slideVideoWidth = slideVideo.width(),
			videoMarginLeft;
		

		if (slideVideoWidth > slideWidth) {
			slideVideo.css({
				marginLeft : (slideWidth - slideVideoWidth) /2
				marginLeft: (slideWidth - slideVideoWidth) / 2
			});
		}
		

		if (slideVideoWidth < slideWidth) {
			slideVideo.css({
				height     : 'auto',
				width      : '100%',
				marginLeft : 0
				height: 'auto',
				width: '100%',
				marginLeft: 0
			});
		}
		else
		{
		else {
			slideVideo.css({
				height     : '100%',
				width      : 'auto',
				height: '100%',
				width: 'auto',
			});
		}
	});
@@ -574,12 +571,12 @@ function homeCarousel() {
		$(this).carouFredSel({
			scroll: 1,
			auto: false,
			infinite  : false,
			infinite: false,
			height: 'auto',
			next: $(this).closest('.home-content').find('.next'),
			prev: $(this).closest('.home-content').find('.prev'),
			items: {
				width : 'variable'
				width: 'variable'
			},
			pagination: {
				container: $(this).closest('.home-content').find('.scroll'),
@@ -600,20 +597,20 @@ function carousel() {
	var $ = jQuery;
	$('.carousel-box .carousel').each(function () {
		var widget = $(this).parents('.carousel-box');
		

		if ($(widget).hasClass('features-first') && $('body').width() <= 979) {
			$(this).closest('.carousel-box').find('.next').hide();
			$(this).closest('.carousel-box').find('.prev').hide();
			$('.carousel-box.features-first .carousel').trigger("destroy", true);
		} else {
			$(this).carouFredSel({
				auto     : false,
				infinite : false,
				scroll   : 1,
				height   : 'auto',
				next     : $(this).closest('.carousel-box').find('.next'),
				prev     : $(this).closest('.carousel-box').find('.prev'),
				swipe : {
				auto: false,
				infinite: false,
				scroll: 1,
				height: 'auto',
				next: $(this).closest('.carousel-box').find('.next'),
				prev: $(this).closest('.carousel-box').find('.prev'),
				swipe: {
					onMouse: true,
					onTouch: true,
					easing: 'linear'
@@ -631,7 +628,7 @@ function properties() {
			$(this).carouFredSel({
				responsive: true,
				auto: false,
				infinite  : false,
				infinite: false,
				pagination: $(this).closest('.property').find('.pagination'),
			}).parents('.images-box').css("overflow", "visible");
		}
@@ -640,16 +637,16 @@ function properties() {

//Property Carousel
function propertyCarousel(selector) {
    var $ = jQuery;
	var $ = jQuery;

    if ((selector.find('a').length > 1) ){
	if ((selector.find('a').length > 1)) {
		selector.carouFredSel({
			responsive: true,
			auto: false,
			infinite  : false,
			infinite: false,
			pagination: selector.closest('.property').find('.pagination'),
		});
    }
	}
}

//Home Property
@@ -659,14 +656,14 @@ function homeProperty() {
		$(this).carouFredSel({
			responsive: true,
			auto: false,
			infinite  : false,
			infinite: false,
			pagination: $(this).closest('.property').find('.pagination'),
			swipe: {
				onMouse: true,
				onTouch: true,
				easing: 'linear'
			},
			height : 'auto',
			height: 'auto',
			items: {
				visible: 1,
			}
@@ -679,45 +676,44 @@ function propertyView() {
	var $ = jQuery,
		thumbsDirection,
		thumbsVisible;
	

	if ($('body').width() >= 980) {
		thumbsDirection = 'up';
		thumbsVisible = 4;
	} else {
		thumbsDirection = 'left';
		thumbsVisible = null;
	}
	
	if ( $('body').width() >= 980 ) {
		$('#thumbs > div:odd').each(function(){

	if ($('body').width() >= 980) {
		$('#thumbs > div:odd').each(function () {
			if ($(this).prev().find('a').length < 2) {
				$(this).children('a').addClass('two');
				$(this).children('a').appendTo($(this).prev());
				$(this).remove();
			}
		});
		

	}
	else
	{
		$('#thumbs > div').each(function(){
	else {
		$('#thumbs > div').each(function () {
			if ($(this).find('a').length > 1) {
				$(this).children('a').removeClass('two');
				$(this).before('<div></div>');
				$(this).children('a:first').appendTo($(this).prev());
			}
		});
	}
	

	$('#thumbs a:first').addClass('selected');
	
	$('#thumbs a').click(function() {
		$('.property-view .galery .images').trigger('slideTo', '#' + this.href.split('#').pop() );

	$('#thumbs a').click(function () {
		$('.property-view .galery .images').trigger('slideTo', '#' + this.href.split('#').pop());
		$('#thumbs a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	});
	

	$('.property-view .galery .images').each(function () {
		$(this).carouFredSel({
			responsive: true,
@@ -733,15 +729,15 @@ function propertyView() {
			},
		}).parents('.galery').addClass('onload');
	});
	

	$('#thumbs').each(function () {
		$(this).carouFredSel({
			circular: false,
			infinite: false,
			auto: false,
			prev: $('.thumbs-box .prev'),
			next: $('.thumbs-box .next'),
			direction : thumbsDirection,
			direction: thumbsDirection,
			items: {
				visible: thumbsVisible,
			},
@@ -756,48 +752,48 @@ function propertyView() {

//Bg Sidebar
function bgSidebar() {
	var $              = jQuery,
		pageHeader     = $('.page-header').outerHeight(),
		windowWidth    = $('body').width(),
	var $ = jQuery,
		pageHeader = $('.page-header').outerHeight(),
		windowWidth = $('body').width(),
		containerWidth = $('.container').width(),
		sidebarWidth   = $('#sidebar').width();
		
		sidebarWidth = $('#sidebar').width();

	$('#sidebar .widget-area .aside-border').css('width', (windowWidth / 2) - (containerWidth / 2) + sidebarWidth);
	$('#sidebar .bg-sidebar').css({
		'top'   : pageHeader,
		'width' : (windowWidth / 2) - (containerWidth / 2) + sidebarWidth
		'top': pageHeader,
		'width': (windowWidth / 2) - (containerWidth / 2) + sidebarWidth
	});
}
	

//Sidebar (width < 980)
function sidebar() {
	var $             = jQuery,
		pageHeader    = $('.page-header').outerHeight(),
	var $ = jQuery,
		pageHeader = $('.page-header').outerHeight(),
		primaryHeight = $('#sidebar .widget-area').height();
	

	$('#primary').css('minHeight', primaryHeight - 50);
	if ($('body').width() <= 979 ) {
	if ($('body').width() <= 979) {
		$('#sidebar').css('marginTop', pageHeader);
	} else {
		$('#sidebar').css('marginTop', 0);
	}
}

function sidebarOpen() {
	var $             = jQuery,
		siteHeader    = $('#site-header').outerHeight(),
		pageHeader    = $('.page-header').outerHeight(),
		bodyHeight    = $('#page').outerHeight(),
		footerHeight  = $('#site-footer').outerHeight(),
	var $ = jQuery,
		siteHeader = $('#site-header').outerHeight(),
		pageHeader = $('.page-header').outerHeight(),
		bodyHeight = $('#page').outerHeight(),
		footerHeight = $('#site-footer').outerHeight(),
		primaryHeight = $('#sidebar .widget-area').height();
	

	$('#primary').css('minHeight', primaryHeight - 50);
	if ($('body').width() <= 979 ) {
	if ($('body').width() <= 979) {
		$('#sidebar').css('marginTop', pageHeader);
	}
	
	$(window).scroll(function(){
		if ($('body').width() <= 979 ) {

	$(window).scroll(function () {
		if ($('body').width() <= 979) {
			if ($(this).scrollTop() > siteHeader + pageHeader) {
				$('#sidebar .sidebar-button').addClass('scroll');
			} else {
@@ -808,48 +804,48 @@ function sidebarOpen() {
			}
		}
	});
	
	$('#sidebar .sidebar-button').click(function(){
		if ($('body').width() <= 979 ) {

	$('#sidebar .sidebar-button').click(function () {
		if ($('body').width() <= 979) {
			if ($('#sidebar').hasClass('open')) {
				$('#sidebar').removeClass('open');
				if ($('#primary').hasClass('right-sidebar')) {
					$('#sidebar').animate({	marginRight: '-292' }, 500 );
					if ($('body').width() >= 768 ) {
						$('#content').animate({	marginLeft: '20' }, 500 );
					$('#sidebar').animate({ marginRight: '-292' }, 500);
					if ($('body').width() >= 768) {
						$('#content').animate({ marginLeft: '20' }, 500);
					} else {
						$('#content').animate({	marginLeft: '0' }, 500 );
						$('#content').animate({ marginLeft: '0' }, 500);
					}
				} else {
					$('#sidebar').animate({	marginLeft: '-292' }, 500 );
					if ($('body').width() >= 768 ) {
						$('#content').animate({	marginRight: '0' }, 500 );
					$('#sidebar').animate({ marginLeft: '-292' }, 500);
					if ($('body').width() >= 768) {
						$('#content').animate({ marginRight: '0' }, 500);
					} else {
						$('#content').animate({	marginRight: '0' }, 500 );
						$('#content').animate({ marginRight: '0' }, 500);
					}
				}
			} else {
				$('#sidebar').addClass('open');
				if ($('#primary').hasClass('right-sidebar')) {
					$('#sidebar').animate({	marginRight: '0' }, 500 );
					if ($('body').width() >= 768 ) {
						$('#content').animate({	marginLeft: '-292' }, 500 );
					$('#sidebar').animate({ marginRight: '0' }, 500);
					if ($('body').width() >= 768) {
						$('#content').animate({ marginLeft: '-292' }, 500);
					} else {
						$('#content').animate({	marginLeft: '-312' }, 500 );
						$('#content').animate({ marginLeft: '-312' }, 500);
					}
				} else {
					$('#sidebar').animate({	marginLeft: '0'	}, 500 );
					if ($('body').width() >= 768 ) {
						$('#content').animate({	marginRight: '-292'	}, 500 );
					$('#sidebar').animate({ marginLeft: '0' }, 500);
					if ($('body').width() >= 768) {
						$('#content').animate({ marginRight: '-292' }, 500);
					} else {
						$('#content').animate({	marginRight: '-312'	}, 500 );
						$('#content').animate({ marginRight: '-312' }, 500);
					}
				}
			}
		}
		return false;
	});
	$('#sidebar > .close').click(function(){
	$('#sidebar > .close').click(function () {
		$("#sidebar .sidebar-button").click();
		return false;
	});
@@ -860,14 +856,14 @@ function moreMenu() {
	var $ = jQuery,
		moreWidth,
		menuWidth;
	

	if ($('body').width() >= 980) {
		var totalWidth = 0,
			closeWidth = $('#main-menu .close').outerWidth(),
			bodyWidth = $('body').width();

		if ($('body').hasClass('main-menu-visible')) {
			$('#second-menu .menu > li').each( function () {
			$('#second-menu .menu > li').each(function () {
				totalWidth = totalWidth + $(this).width();
				if (totalWidth > bodyWidth) {
					$(this).addClass('more-li');
@@ -876,7 +872,7 @@ function moreMenu() {
				}
			});
		} else {
			$('#main-menu .main-navigation .menu > li').each( function () {
			$('#main-menu .main-navigation .menu > li').each(function () {
				totalWidth = totalWidth + $(this).outerWidth();
				if (totalWidth > (bodyWidth - closeWidth)) {
					$(this).addClass('more-li');
@@ -885,33 +881,33 @@ function moreMenu() {
				}
			});
		}
		

		if ($('body').hasClass('main-menu-visible')) {
			moreWidth = $('#second-menu .more-a').outerWidth();
			menuWidth = $('#second-menu .menu').outerWidth();
			

			if (bodyWidth < (menuWidth + moreWidth)) {
				$('#second-menu .menu li:last').addClass('more-li');
				$('#second-menu .menu li:last').prependTo('#second-menu .more-ul');
			}
		} else {
			moreWidth = $('#main-menu .more-a').outerWidth();
			menuWidth = $('#main-menu .menu').outerWidth();
			

			if (bodyWidth < (menuWidth + moreWidth + closeWidth)) {
				$('#main-menu .main-navigation .menu li:last').addClass('more-li');
				$('#main-menu .main-navigation .menu li:last').prependTo('#main-menu .more-ul');
			}
		}
	} else {
		if ($('body').hasClass('main-menu-visible')) {
			$('#second-menu .more-ul .more-li').each( function () {
			$('#second-menu .more-ul .more-li').each(function () {
				$('#second-menu .more').removeClass('visible');
				$(this).appendTo('#second-menu .menu');
				$(this).removeClass('more-li');
			});
		} else {
			$('#main-menu .more-ul .more-li').each( function () {
			$('#main-menu .more-ul .more-li').each(function () {
				$('#main-menu .more').removeClass('visible');
				$(this).appendTo('#main-menu .menu');
				$(this).removeClass('more-li');
@@ -922,46 +918,76 @@ function moreMenu() {
}

function imgProperies() {
	var $           = jQuery,
		imgBox      = $('.properties-list .property .images-box'),
	var $ = jQuery,
		imgBox = $('.properties-list .property .images-box'),
		imgBoxWidth = imgBox.width(),
		img         = $('.properties-list .property .images-box .images img'),
		imgWidth    = img.width();
		
		img = $('.properties-list .property .images-box .images img'),
		imgWidth = img.width();

	if (imgWidth > imgBoxWidth) {
		img.each( function () {
		img.each(function () {
			img.css('marginLeft', (imgBoxWidth - imgWidth) / 2);
		});
	}
}

// Search form
function getPosition() {
	// If geolocation is available, try to get the visitor's position
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
		console.log("Getting the position information...");
	} else {
		alert("Sorry, your browser does not support HTML5 geolocation.");
	}
};

// Define callback function for successful attempt
function successCallback(position) {
	console.log("Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")");
}

// Define callback function for failed attempt
function errorCallback(error) {
	if (error.code == 1) {
		console.log("User did not give permission to access location.");
	} else if (error.code == 2) {
		alert("The network is down or the positioning service can't be reached.");
	} else if (error.code == 3) {
		alert("The attempt timed out before it could get the location data.");
	} else {
		alert("Geolocation failed due to unknown error.");
	}
}


//Home Map
function geocodePosition(pos, element) {
	var $ = jQuery;
  

	geocoder = new google.maps.Geocoder();
	geocoder.geocode(
		{latLng: pos},
		function(results, status) {
			if (status == google.maps.GeocoderStatus.OK)  {
		{ latLng: pos },
		function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var key = Math.floor(results['length'] / 2);
	  

				$(element).parent().attr('title', results[key].formatted_address);
	  

				$(element).replaceWith(results[key].formatted_address);
			} 
			else  {
			}
			else {
				$(element).replaceWith(ibr.adressError + ' ' + status);
			}
	

		}
	);
}
	
jQuery(document).ready(function() {
    "use strict";
    var $ = jQuery;
	

jQuery(document).ready(function () {
	"use strict";
	var $ = jQuery;

	$('body').on('click', 'video.slide-video', function () {
		if (this.paused) {
			this.play();
@@ -970,24 +996,24 @@ jQuery(document).ready(function() {
			this.pause();
		}
	});
	if ($('body').width() <= 1198 ) {
	if ($('body').width() <= 1198) {
		$('#main .home-slider .slide .slide-image video').remove();
	}
	

	//Functions
	/* Radio, Checkbox and Select */
	formStylization();
	

	/* Home Tabs */
	optionHomeMap();
	optionHomeAgents();
	optionHomeProperties();
	optionHomeProperty();
	optionHomeSliders();
	

	/* Carousel */
	$(window).bind({
		load : function() {
		load: function () {
			carousel();
			properties();
			homeProperty();
@@ -998,19 +1024,19 @@ jQuery(document).ready(function() {
		}
	});

	$(window).load(function() {
	$(window).load(function () {
		$('.home-tabs-overlay').css('display', 'none');
	});
	

	//Bootstrap Elements
	$('.tooltip-demo a').tooltip();
	$('.tooltip-link').tooltip();
	

	$('.nav-tabs a').click(function () {
		e.preventDefault();
		$(this).tab('show');
	});
	

	$('.btn-loading').click(function () {
		var btn = $(this);
		btn.button('loading');
@@ -1021,133 +1047,133 @@ jQuery(document).ready(function() {
	$('.disabled').click(function () {
		return false;
	});
	

	if ($('body').width() >= 980) {
		$('.fancybox').fancybox({
			openEffect	: 'fade',
			closeEffect	: 'fade',
			prevEffect	: 'fade',
			nextEffect	: 'fade',
			helpers :  {
				title : {
					type : 'inside'
			openEffect: 'fade',
			closeEffect: 'fade',
			prevEffect: 'fade',
			nextEffect: 'fade',
			helpers: {
				title: {
					type: 'inside'
				},
			}
		});
	} else {
		$('.property-view #content .galery .images a').click(function(){
		$('.property-view #content .galery .images a').click(function () {
			return false;
		});
	}
	

	//Accordion
	$('.accordion-group .accordion-body.in').parent().addClass('active');
	$('.accordion-group .accordion-heading').click( function(e){
	$('.accordion-group .accordion-heading').click(function (e) {
		var accordion = $(this).parent();
		
		if ( accordion.hasClass('active')) {

		if (accordion.hasClass('active')) {
			accordion.removeClass('active');
		} else {
			$('.accordion-group').removeClass('active');
			accordion.addClass('active');
		}
	}).dblclick(function(){
		$(this).trigger( "click" );
	}).dblclick(function () {
		$(this).trigger("click");
		return false;
	});

	$('.accordion-toggle').bind('touchstart', function(){
	$('.accordion-toggle').bind('touchstart', function () {
		$(this).addClass('not-hover');
	});
	

	//Properties Options
	$('#main .property .options .bedrooms').each(function(){
	$('#main .property .options .bedrooms').each(function () {
		$(this).css('right', $(this).next().width() + 40);
	});
	
	$('#main .properties-list .property .options .bedrooms').each(function(){

	$('#main .properties-list .property .options .bedrooms').each(function () {
		$(this).css('right', $(this).next().width() + 50);
	});
	

	// Scroll to Top
	$('#up').click(function() {
	$('#up').click(function () {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 500);
		return false;
	});
	

	//Header Icons
	$('#site-header .header-icons-buttons a').click(function(){
	$('#site-header .header-icons-buttons a').click(function () {
		$(this).effect('pulsate', { times: 1 }, 5);
		var $class    = $(this).attr('href'),
		var $class = $(this).attr('href'),
			iconCount = $('#site-header .header-icons-buttons > a').length;
			

		if ($(this).hasClass('active')) {
			return false;
		} else {
			$('#site-header .header-icons-buttons a').removeClass('active prev');
			$(this).addClass( 'active', 10, 'easeOutBounce');
			$(this).addClass('active', 10, 'easeOutBounce');
			if (iconCount < 3) {
				$(this).next().addClass( 'prev', 10, 'easeOutBounce');
				$(this).prev().addClass( 'prev', 10, 'easeOutBounce');
				$(this).next().addClass('prev', 10, 'easeOutBounce');
				$(this).prev().addClass('prev', 10, 'easeOutBounce');
			} else {
				if ($(this).hasClass('email')) {
					$('#site-header .header-icons-buttons .phone').addClass( 'prev', 10, 'easeOutBounce');
					$('#site-header .header-icons-buttons .phone').addClass('prev', 10, 'easeOutBounce');
				} else {
					$(this).prev().addClass('prev');
				}
			}
			$('#site-header .header-icons-body > div').css('display', 'none');
			$('#site-header .header-icons-body > div').removeClass('active');
			$('#site-header .header-icons-body .' +$class).fadeIn('15000');
			$('#site-header .header-icons-body .' +$class).addClass('active');
			$('#site-header .header-icons-body .' + $class).fadeIn('15000');
			$('#site-header .header-icons-body .' + $class).addClass('active');
			return false;
		}
	});
	

	//Main Menu
	$('#site-header .menu-button').click(function(){
	$('#site-header .menu-button').click(function () {
		$('#main-menu .main-navigation, #second-menu').show('500');
		$('#main-menu .bg-color, .second-bg').fadeIn('1000');
		return false;
	});
	$('#main-menu .close, #main-menu .bg-color').click(function(){
	$('#main-menu .close, #main-menu .bg-color').click(function () {
		$('#main-menu .main-navigation').hide('500');
		$('#main-menu .bg-color').fadeOut('1000');
		return false;
	});
	$('#second-menu .close, .second-bg').click(function(){
	$('#second-menu .close, .second-bg').click(function () {
		$('#second-menu').hide('500');
		$('.second-bg').fadeOut('1000');
		return false;
	});
	

	$('#main-menu .sub-menu, #second-menu .sub-menu').parent('li').addClass('parent');
	
	if ($('body').width() <= 979 ) {

	if ($('body').width() <= 979) {
		$('#main-menu .sub-menu, #second-menu .sub-menu').prev('a').append('<span class="open-sub">+</span>');
	}
	

	//Main Menu More
	moreMenu();
	if (!$('body').hasClass('main-menu-visible')) {
		$('#site-header .menu-button').click(function(){
		$('#site-header .menu-button').click(function () {
			moreMenu();
		});
	}
	
	$('#main-menu .open-sub , #second-menu .open-sub').toggle(function(){
		if ($('body').width() <= 979 ) {

	$('#main-menu .open-sub , #second-menu .open-sub').toggle(function () {
		if ($('body').width() <= 979) {
			if ($(this).parent().next().hasClass('sub-menu') && $(this).parents('.parent').not('active')) {
				$(this).html('&#8211;');
				$(this).parent().next('.sub-menu').slideDown(600);
				$(this).parents('.parent').addClass('active');
			}
		}
		return false;
	}, function(){
		if ($('body').width() <= 979 ) {
	}, function () {
		if ($('body').width() <= 979) {
			if ($(this).parent().next().hasClass('sub-menu')) {
				$(this).html('+');
				$(this).parent().next('.sub-menu').slideUp(600);
@@ -1156,11 +1182,11 @@ jQuery(document).ready(function() {
		}
		return false;
	});
	

	//Sidebar menu
	$('#sidebar .sub-menu, #sidebar .children').prev('a').append('<span class="open-sub">+</span>');
	$('#sidebar .sub-menu, #sidebar .children').parent('li').addClass('parent');
	$('#sidebar a > .open-sub').toggle(function(){
	$('#sidebar a > .open-sub').toggle(function () {
		if ($(this).parent().next().hasClass('sub-menu') && $(this).parents('.parent').not('active')) {
			$(this).html('&#8211;');
			$(this).parent().next('.sub-menu').slideDown(600);
@@ -1172,7 +1198,7 @@ jQuery(document).ready(function() {
			$(this).parents('.parent').addClass('active');
		}
		return false;
	}, function(){
	}, function () {
		if ($(this).parent().next().hasClass('sub-menu')) {
			$(this).html('+');
			$(this).parent().next('.sub-menu').slideUp(600);
@@ -1185,198 +1211,198 @@ jQuery(document).ready(function() {
		}
		return false;
	});
	

	bgSidebar();
	sidebar();
	sidebarOpen();
	

	//Meta Head
	if (document.width > 768) {
        $('.viewport').remove();
		$('.viewport').remove();
	}
	

	//Team
	$('body').bind('touchstart', function(e){
	$('body').bind('touchstart', function (e) {
		if (!$(e.target).closest('.team-shortcode .team-member .worker-info').length) {
			$('.team-shortcode .team-member .worker-info').removeClass('hover');
		}
	});
	
	$('.team-shortcode .team-member .worker-info').bind('touchstart', function(){

	$('.team-shortcode .team-member .worker-info').bind('touchstart', function () {
		if ($(this).hasClass('hover')) {
			$(this).removeClass('hover');
		} else {
			$('.team-shortcode .team-member .worker-info').removeClass('hover');
			$(this).addClass('hover');
		}
	});
	
	$('.team-shortcode .team-member .worker-info').mouseenter(function(){

	$('.team-shortcode .team-member .worker-info').mouseenter(function () {
		$(this).addClass('hover');
    }).mouseleave(function(){
	}).mouseleave(function () {
		$(this).removeClass('hover');
    });
	});



	//Carousel next/prev button (not active)
	$('.prev-next').bind('touchstart', function(){
	$('.prev-next').bind('touchstart', function () {
		$(this).removeClass('not-hover');
	});
	$('.prev-next').bind('touchend', function(){
	$('.prev-next').bind('touchend', function () {
		$(this).addClass('not-hover');
	});
	

	//Chart
	if ($('.graph-params .praph-param').length) {
		var line,
			lineX,
			lineY;
	

		var lineOne = [];
			
		$('.graph-params .praph-param').each( function () {

		$('.graph-params .praph-param').each(function () {
			lineX = $(this).attr('id');
			lineY = $(this).attr('value');
			lineOne.push([lineX, parseFloat(lineY)]);
		});
		

		line = lineOne;
		

		var xtitle = $('#chart-param .title-x').attr('value'),
			ytitle = $('#chart-param .title-y').attr('value'),
			lineColor = $('#chart-param .linecolor').attr('value');
		var plot1 = $.jqplot('chart', [line], {
			axes : {
				xaxis : {
					renderer      : $.jqplot.DateAxisRenderer,
					label         : xtitle,
					labelRenderer : $.jqplot.CanvasAxisLabelRenderer,
					tickOptions   : {
						formatString:'%b.'
			axes: {
				xaxis: {
					renderer: $.jqplot.DateAxisRenderer,
					label: xtitle,
					labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
					tickOptions: {
						formatString: '%b.'
					}
				},
				yaxis : {
					tickOptions : {
						formatString : ''
				yaxis: {
					tickOptions: {
						formatString: ''
					},
					label : ytitle,
					labelRenderer : $.jqplot.CanvasAxisLabelRenderer,
					label: ytitle,
					labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
				}
			},
			highlighter : {
				show          : true,
				sizeAdjust    : 10
			highlighter: {
				show: true,
				sizeAdjust: 10
			},
			cursor : {
				show          : false
			cursor: {
				show: false
			},
			series : [
			series: [
				{
					lineWidth : 1,
					color     : lineColor,
					lineWidth: 1,
					color: lineColor,
				},
			],
			grid : {
				drawGridLines : false,
				gridLineColor : 'none',
				background    : 'none',
				borderColor   : '#999999',
				borderWidth   : 2,
				shadow        : false,
				renderer      : $.jqplot.CanvasGridRenderer,
			grid: {
				drawGridLines: false,
				gridLineColor: 'none',
				background: 'none',
				borderColor: '#999999',
				borderWidth: 2,
				shadow: false,
				renderer: $.jqplot.CanvasGridRenderer,
			},
		});
	}
	

	//Resize Window
	$( window ).resize(function() {
		delay( function() {			
	$(window).resize(function () {
		delay(function () {
			if (document.width > 768) {
				$('.viewport').remove();
			} else {
				$('head').append('<meta class="viewport" name="viewport" content="width=device-width, initial-scale=1.0">');
			}
			

			//Chart
			if ($('.graph-params .praph-param').length) {
				plot1.replot( { resetAxes: true } );
				plot1.replot({ resetAxes: true });
			}
			

			//Sidebar
			sidebar();
			bgSidebar();
			if ($('body').width() >= 979 ) {
			if ($('body').width() >= 979) {
				$('#content').removeAttr('style', 'margin-left');
				$('#sidebar').removeClass('open');
				$('#sidebar').removeAttr('style', 'margin-right');
			}
			

			//Home restructured carousel
			$('#main .home-content .home-carousel .span4').each(function(){
				$(this).children('.agent').each( function(){
			$('#main .home-content .home-carousel .span4').each(function () {
				$(this).children('.agent').each(function () {
					$(this).appendTo($(this).parent().parent()).wrap('<div class="span4"></div>');
				});
			});
			$('#main .home-content .home-carousel .span4').each(function(){
			$('#main .home-content .home-carousel .span4').each(function () {
				if ($(this).children('.agent').length == 0) {
					$(this).remove();
				}
			});
	
			$('#main .home-content .home-carousel .span3').each(function(){
				$(this).children('.property').each( function(){

			$('#main .home-content .home-carousel .span3').each(function () {
				$(this).children('.property').each(function () {
					$(this).appendTo($(this).parent().parent()).wrap('<div class="span3"></div>');
				});
			});
			$('#main .home-content .home-carousel .span3').each(function(){
			$('#main .home-content .home-carousel .span3').each(function () {
				if ($(this).children('.property').length == 0) {
					$(this).remove();
				}
			});
			

			//Home Tabs
			optionHomeMap();
			optionHomeAgents();
			optionHomeProperties();
			optionHomeProperty();
			optionHomeSliders();
			

			//Carousel
			carousel();
			properties();
			homeProperty();
			propertyView();
			homeCarousel();
			imgProperies();
			

			//Menu
			if ($('body').width() >= 979 ) {
			if ($('body').width() >= 979) {
				$('#second-menu').removeAttr('style', 'display');
				$('.second-bg').css('display', 'none');
			}
			moreMenu();
			if (!$('body').hasClass('main-menu-visible')) {
				$('#site-header .menu-button').click(function(){
				$('#site-header .menu-button').click(function () {
					moreMenu();
				});
			}
			

			$('#main-menu .open-sub, #second-menu .open-sub').remove();
			if ($('body').width() <= 979 ) {
			if ($('body').width() <= 979) {
				$('#main-menu .sub-menu, #second-menu .sub-menu').prev('a').append('<span class="open-sub">+</span>');
			}
			
			$('#main-menu .open-sub , #second-menu .open-sub').toggle(function(){
				if ($('body').width() <= 979 ) {

			$('#main-menu .open-sub , #second-menu .open-sub').toggle(function () {
				if ($('body').width() <= 979) {
					if ($(this).parent().next().hasClass('sub-menu') && $(this).parents('.parent').not('active')) {
						$(this).html('&#8211;');
						$(this).parent().next('.sub-menu').slideDown(600);
						$(this).parents('.parent').addClass('active');
					}
				}
				return false;
			}, function(){
				if ($('body').width() <= 979 ) {
			}, function () {
				if ($('body').width() <= 979) {
					if ($(this).parent().next().hasClass('sub-menu')) {
						$(this).html('+');
						$(this).parent().next('.sub-menu').slideUp(600);
@@ -1385,19 +1411,19 @@ jQuery(document).ready(function() {
				}
				return false;
			});
			
		}, 'resize' );
		

		}, 'resize');

	});
	
	var delay = ( function() {
		var timeout = { };
		
		return function( callback, id, time ) {
			if( id !== null ) {
				time = ( time !== null ) ? time : 100;
				clearTimeout( timeout[ id ] );
				timeout[ id ] = setTimeout( callback, time );

	var delay = (function () {
		var timeout = {};

		return function (callback, id, time) {
			if (id !== null) {
				time = (time !== null) ? time : 100;
				clearTimeout(timeout[id]);
				timeout[id] = setTimeout(callback, time);
			}
		};
	})();
