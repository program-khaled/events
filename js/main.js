$(document).ready(function () {
   $("header nav .content ul li").on('click',function(e) {
       $(this).addClass("active").siblings().removeClass("active");
   });
   $(".ham").on("click",function(e){
      e.preventDefault();
      $(".fl").slideToggle();
   });

   $("main .conference .content .taps .tap").on('click', function (e) {
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass("active");
   });

   $(window).on('scroll',function(){
      if ($(window).scrollTop() >= $('.speakers').offset().top){
         $('.sort-up i').css('font-size','40px');
      }else{
         $('.sort-up i').css('font-size', '0px');
      }
   });

   $(".sort-up").on('click', function () {
      $(window).scrollTop(0);
   });
});