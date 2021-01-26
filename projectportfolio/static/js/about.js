$(document).ready( function () {
    align();
});

$(window).resize( function () {
  align();
});

let align = () => {
  let intro = $('.box.intro').offset();
  let introHeight = $('.box.intro').height();
  let introWidth = $('.box.intro').width();
   $('.box').slice(1).css('position', 'absolute').height(introHeight).width(introWidth).offset(intro);
}
