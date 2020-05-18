$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow-left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow-right.svg" alt="right"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});