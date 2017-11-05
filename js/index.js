
/* Parallax */
!function(n){var t=n(window),e=t.height();t.resize(function(){e=t.height()}),n.fn.parallax=function(o,i,r){function u(){var r=t.scrollTop();a.each(function(){var t=n(this),u=t.offset().top,c=h(t);r>u+c||u>r+e||a.css("backgroundPosition",o+" "+Math.round((l-r)*i)+"px")})}var h,l,a=n(this);a.each(function(){l=a.offset().top}),h=r?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===i)&&(i=.1),(arguments.length<3||null===r)&&(r=!0),t.bind("scroll",u).resize(u),u()}}(jQuery);

$(function(){
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || ($("#Services").parallax("50%", .4)), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(".parallax-section").css({
        "background-attachment": "scroll"
    });
});
   
$(window).bind('resize', function(){
  if($('.menu-icon').css('display') == "none") {
    $('#navigation').show();
  } else {
    $('#navigation').hide();
  }  
});            
                     
$('.menu-icon').on('click', function(event){ 
  event.preventDefault();
  if($('#navigation').css('display') != 'block') {
    $('#navigation').slideDown();
  } else {
    $('#navigation').slideUp();
  }   
});

$('#mainnav li a').on('click', function(event){
  
  var target = $(this).attr('href');
  var offsetTop = $(target).offset().top;
     
  $('html, body').animate({
    scrollTop: offsetTop
  }, 1000);
  
  if( $('.menu-icon').css('display') == 'block') { 
    $('#navigation').slideUp();
  }  
  event.preventDefault();
});