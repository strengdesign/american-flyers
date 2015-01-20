$(function () {

	/* ==========================================================================
	   variables
	   ========================================================================== */
	var navContainer = $('.site-nav');
	var mainNav = $('.main-nav');

	/* ==========================================================================
	   mobile navigation
	   ========================================================================== */
	navContainer.prepend('<span class="nav-icon" title="Menu">&nbsp;<span class="icon"></span></span>');
	mainNav.find('.menu').before('<span class="subnav-icon" title="Toggle">&nbsp;</span>');

	$('.nav-icon').click(function () {
		mainNav.toggleClass('active');
		$(this).toggleClass('active');
	});

	mainNav.find('.subnav-icon').click(function () {
		$(this).next('ul').slideToggle(250);
		$(this).toggleClass('active');
	});


	/* ==========================================================================
	   homepage video
	   ========================================================================== */
	$('.homepage-video .title-screen').click(function () {
		$(this).fadeOut();
		//$('.homepage-video .video-container').show();
	});

});
