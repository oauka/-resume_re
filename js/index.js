// $('#header .open').on('click', function(){
//     $(this).removeClass('on')
//     $(this).next().next().next().next().addClass('on')
//     $(this).next().addClass('on')
// })

// $('#header .close').on('click', function(){
//     $(this).removeClass('on')
//     $(this).prev().prev().prev().prev().addClass('on')
//     $(this).prev().prev().prev().removeClass('on')
//     $(this).prev().find('.depth1 > li').removeClass('on')
// })

$('.depth1 > li').on('click', function(e){
    var index = $(this).index()
    if (index===1) {
        e.preventDefault()
    }
    if ( $(this).find('.depth2').css('display') === 'none' ) {
        $(this).find('.depth2').stop().slideDown(300)    
    } else {
        $(this).find('.depth2').stop().slideUp(300)
    }
    $(this).siblings().find('.depth2').stop().slideUp(300)
})

$('.depth2 > li').on('click', function(e){
e.stopPropagation()
})

// 메인슬라이드 : 슬릭슬라이더 연결
$('.slide-group').slick({
    autoplay:true,
    dots:true,
    autoplaySpeed:4500,
    pauseOnFocus:false,
    arrows:true,
    prevArrow:'<button class="prev"><i class="fas fa-arrow-circle-left"></i></button>',
    nextArrow:'<button class="next"><i class="fas fa-arrow-circle-right"></i></button>',
    responsive: [{
        breakpoint:501,
        settings: {
            arrows:false
        }
    }]
})

/////////////////////////////////////////////////////////////////////////////////////

var portNear = $('#portfolio').offset().top
var meNear = $('#me').offset().top
var contactNear = $('#contactme').offset().top  
$('#nav .depth1 > li').on('click', function(e){
    e.preventDefault()
    var num = $(this).index()
    switch(num) {
        case 0 : $('html').stop().animate({ scrollTop:0 }, 500); break;
        case 1 : $('html').stop().animate({ scrollTop:portNear }, 500); break;
        case 2 : $('html').stop().animate({ scrollTop:contactNear }, 500); break;
        default : break;
    }
}) 

// $('.section').on('mousewheel', function(e, delta){
//     if (delta>0) {
//         var prev = $(this).prev().offset().top
//         $('html').stop().animate({
//             scrollTop:prev
//         }, 500, 'linear')
//     } else if (delta<0) {
//         var next = $(this).next().offset().top
//         $('html').stop().animate({
//             scrollTop:next
//         }, 500, 'linear')
//     }
// })
