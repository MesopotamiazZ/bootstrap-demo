$(document).ready(function(){
  resize();
  // coverage();
  $(window).on('resize', resize);
})

function resize() {
  //屏幕宽度发生变化改变banner
  var windowWidth = $(window).width();
  var bannerHeight = $('.banner').height();
  var isSmall = windowWidth < 840;
  var imgSrc = isSmall ? $('.banner').data('image-sm') : $('.banner').data('image-lg')
  // console.log(imgSrc)
  $('.banner').css('backgroundImage', 'url('+imgSrc+')');
  $('.coverage').css('width', windowWidth).css('height', bannerHeight)

  if (isSmall) { // 小于840px使用img元素添加banner
  	$('.banner').html('<img src="'+imgSrc+'" class="imgSrc">');
    $('.imgSrc').load(() => {
      var imgSrcHeight = $('.imgSrc').height();
      // console.log(imgSrcHeight)
      $('.coverage').css('width', windowWidth).css('height', imgSrcHeight)
    })
  } else {
  	$('.banner').empty();
  }
}

// function coverage() {
//   $('.banner').mouseenter(() => {
//     var divcoverage = '<div class="coverage"></div>';
//     $(divcoverage).appendTo('body');
//     resize();
//   });

//   $('.coverage').mouseleave(() => {
//     console.log('leave')
//     $('.coverage').remove();
//   })
// }