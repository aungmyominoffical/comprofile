$(window).on('load',function(){
    $('.loader').fadeOut(500,function(){
        $(this).remove();
    });
})

$('.navbar-toggler').click(function(){
    let result = $('.navbar-collapse').hasClass('show');
    if(result){
        $('.menu-icon').removeClass('fa-times').addClass('fa-bars');
    }else{
        $('.menu-icon').removeClass('fa-bars').addClass('fa-times');
    }
})


new WOW().init();
        
$(".pricing-slide").slick({
    arrows:false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

var sections = document.querySelectorAll('section');
var a = document.querySelectorAll('.collapse ul li a');
var ul = document.querySelector('.collapse ul');

var scrollOperator = function(){
    console.log('pc work');
    window.addEventListener('scroll',function(){
    
        var current = '';
    
        sections.forEach(element => {
            var sectionTop = element.offsetTop;
            var sectionHeight = element.clientHeight;
    
            if(pageYOffset >= sectionTop){
                current = element.getAttribute('id');     
            }else{
                $('.site-nav').removeClass('site-nav-scroll');
            }
        });
    
        a.forEach(function(element){
            element.classList.remove('current-section');
            if(element.classList.contains(current)){
                element.classList.add('current-section');
            }
        })

        setNavScroll();
    
        })
    }

var setNavScroll = function(){
    if(pageYOffset > 650){
        $('.site-nav').addClass('site-nav-scroll');
    }
}
