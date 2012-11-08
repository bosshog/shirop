// JavaScript Document
$(document).ready(function() {
  setLeft();
  
  $(window).resize(function() {
	setLeft();	
  });
  
  $('.activable').click(function() {
    $('.activable').removeClass('active');
    $(this).addClass('active');
  });
});

var setLeft = function() {
  var bodyW = $('body').css('width').replace('px', '');
  var bodyWNum = parseInt(bodyW);
  var windowW = $(window).width();
  var headerLeft = (windowW - bodyWNum) / 2;

  $('#header').css('left', headerLeft + 'px');
  $('#column').css('left', headerLeft + 'px');
  $('#content').css('left', headerLeft + 'px');
};