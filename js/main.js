$(document).ready(function(){
  resize();
  $(window).on('resize', resize);
})

function resize() {
  //屏幕宽度发生变化改变banner
  var windowWidth = $(window).width();
  var isSmall = windowWidth < 840;
  var imgSrc = isSmall ? $('.banner').data('image-sm') : $('.banner').data('image-lg')
  console.log(imgSrc)
  $('.banner').css('backgroundImage', 'url('+imgSrc+')');

  if (isSmall) { // 小于840px使用img元素添加banner
  	$('.banner').html('<img src="'+imgSrc+'">')
  } else {
  	$('.banner').empty();
  }
}