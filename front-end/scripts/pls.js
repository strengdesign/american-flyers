$(function () {

	/* ==========================================================================
	   Variables
	   ========================================================================== */
	var navContainer = $('.site-nav');
	var mainNav = $('.main-nav');
	var siteHeader = $('.site-header');
	var siteHeaderHeight = siteHeader.height();
	var heroHeight = $('.hero').outerHeight();
	var siteHeadOffset = heroHeight;
	var siteSearch = $('.site-search');

	/* ==========================================================================
	   Mobile navigation
	   ========================================================================== */
	navContainer.before('<span class="nav-icon" title="Open Menu">&nbsp;<span class="icon"></span></span>');
	navContainer.prepend('<span class="nav-icon-close" title="Close Menu">&nbsp;</span>');
	mainNav.find('.menu').before('<span class="subnav-icon" title="Toggle Menu">&nbsp;</span>');

	$('.nav-icon').click(function () {
		navContainer.addClass('active');
		$(this).addClass('active');
		$('.site-nav-overlay').addClass('active');
	});

	$('.nav-icon-close').click(function () {
		navContainer.removeClass('active');
		$(this).removeClass('active');
		$('.site-nav-overlay').removeClass('active');
	});

	$('.site-nav-overlay').click(function () {
		$('.nav-icon-close').click();
	});

	mainNav.find('.subnav-icon').click(function () {
		$(this).next('ul').slideToggle(250);
		$(this).toggleClass('active');
	});

	/* ==========================================================================
	   Search modal
	   ========================================================================== */
	$('.search-icon').fancybox({
		padding: 0,
		minHeight: 20,
		helpers: {
			overlay: {
				locked: false
			}
		},
		afterShow: function () {
			$('.search-modal').find('input').focus();
		}
	});


	/* ==========================================================================
	   Tabs
	   ========================================================================== */
	if($('.tabs').length) {
		var activeTab = $('.tabs li.active');
		$('#' + activeTab.attr('rel')).addClass('active');

		$('.tabs li').click(function () {
			tabClicked = $(this);
			targetPane = $('#' + tabClicked.attr('rel'));
			tabClicked.siblings().each(function () {
				$(this).removeClass('active');
				$('#' + $(this).attr('rel')).removeClass('active');
			});
			tabClicked.addClass('active');
			targetPane.addClass('active');
		});
	}


	/* ==========================================================================
	   Filter menu
	   ========================================================================== */
	$('.filter-menu .filter-toggle').click(function () {
		$(this).closest('.filter-menu').toggleClass('active');
	});

	// close filter menu on click outside
	$(document).mouseup(function (e) {
		var container = $('.filter-menu');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.removeClass('active');
		}
	});


	/* ==========================================================================
	   Smooth anchor
	   ========================================================================== */
	$('.smooth-anchor').click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - siteHeaderHeight
		}, 1250);
	});


	/* ==========================================================================
	   Datepicker for ranges
	   ========================================================================== */
	if ($('.datepicker.start').length && $('.datepicker.end').length) {
		var calMaxDate = new Date();
		calMaxDate.setDate(calMaxDate.getDate() + 365);

		//start date
		$('.datepicker.start').datepicker({
			maxDate: calMaxDate,
			changeMonth: true,
			changeYear: true,
			onClose: function (selectedDate) {
				//give the end datepicker a minDate
				$('.datepicker.end').datepicker('option', 'minDate', selectedDate);
			}
		});
		
		//end date
		$('.datepicker.end').datepicker({
			maxDate: calMaxDate,
			changeMonth: true,
			changeYear: true,
			onClose: function (selectedDate) {
				//if a date was not selected, store today's date
				if (!selectedDate) {
					selectedDate = calMaxDate;
				}
				//give the start datepicker a maxDate
				$('.datepicker.start').datepicker('option', 'maxDate', selectedDate);
			}
		});
	}

	/* ==========================================================================
	   Collapsable resource search
	   ========================================================================== */
	$('.resource-search h3').click(function () {
		$('.resource-search').toggleClass('active');
	});

	/* ==========================================================================
	   Collapsable resource search
	   ========================================================================== */
	if ($(window).width() > 950) {
		$('.about-timeline li').addClass('hidden');
	}


	/* ==========================================================================
	   Scrolly stuff
	   ========================================================================== */
	$(window).scroll(function () {
		var scrollPos = $(this).scrollTop();

		// site header
		if ($(window).width() > 1150) {
			if ($('.hero').length) {
				if (scrollPos > heroHeight) {
					if (!siteHeader.hasClass('fixed')) {
						siteHeader.addClass('fixed');
						siteHeader.css('top', -siteHeaderHeight);
						siteHeader.animate({
							top: 0
						}, 300);
					}
				} else {
					if (siteHeader.hasClass('fixed')) {
						siteHeader.removeClass('fixed');
						siteHeader.css('top', '0');
					}
				}
			} else {
				if (scrollPos > siteHeaderHeight) {
					if (!siteHeader.hasClass('fixed')) {
						siteHeader.addClass('fixed');
						siteHeader.css('top', -siteHeaderHeight);
						siteHeader.animate({
							top: 0
						}, 300);
					}
				} else {
					if (siteHeader.hasClass('fixed')) {
						siteHeader.removeClass('fixed');
						siteHeader.css('top', '0');
					}
				}
			}
		}

		// history timeline
		$('.about-timeline li').each(function (i, el) {
			if ($(el).visible()) {
				$(el).removeClass('hidden');
			}
		});

	});

	/* ==========================================================================
	   Check if element is within viewport
	   ========================================================================== */
	$.fn.visible = function (partial) {

		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;

		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	};

});