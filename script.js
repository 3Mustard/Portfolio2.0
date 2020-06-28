$(document).ready(function(){

    // $(window).scroll(function() {
    //   if($(window).scrollTop()>0){ //set the value to the height of anything above the navbar on page load.
    //     $('nav').addClass('sticky-nav');
    //   }else{
    //     $('nav').removeClass('sticky-nav')
    //   }
    // });

    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy(); 
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    

  });