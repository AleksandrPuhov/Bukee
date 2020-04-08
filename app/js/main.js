$(document).ready(function () {

    const mySwiper = new Swiper('.testimonial-swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    $('.header-top-burger, .modal').click((event) => {
         $('.header-top-burger, .modal').toggleClass('active')
    })
});
