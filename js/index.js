$('.depth1 > li').on('click', function(e){
    e.stopPropagation()
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
$('.depth2').on('click', function(e){
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