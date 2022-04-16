$(function () {

 /* $('.nav-arrow').on('click', function () {
    $(this).toggleClass('active');
  }); */
  
  
    /* gallery filter link hover active js starts */

    $('.nav-link').on('click', function () {
        $('.nav-arrow').toggleClass('active')
        $('.nav-arrow').siblings('.active').removeClass('active');
    })
    /* gallery filter link hover active js ends */

  $('.toggle-btn').on('click', function () {
    $('.side-bar, .main-content,.toggle-btn').toggleClass('active');
  })



  $('.side-bar').slimScroll({
	});















})