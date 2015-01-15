$(function () {

	/* ==========================================================================
	   Variables
	   ========================================================================== */
	var navContainer = $('.site-nav');
	var mainNav = $('.main-nav');

	/* ==========================================================================
	   Mobile navigation
	   ========================================================================== */
	navContainer.prepend('<span class="nav-icon clearfix">Menu <span class="icon"></span></span>');
	mainNav.find('.menu').before('<span class="subnav-icon">&nbsp;</span>');

	$('.nav-icon').click(function () {
		mainNav.toggleClass('active');
		$(this).toggleClass('active');
	});

	mainNav.find('.subnav-icon').click(function () {
		$(this).next('ul').slideToggle(250);
		$(this).toggleClass('active');
	});



});