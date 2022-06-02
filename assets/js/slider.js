$(document).ready(function(){
  $('.slider__wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      infinite: true,
      dots: true,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-arrow-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-arrow-right"></i></button>`,
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 741,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false //ẩn mũi tên
            }
          }
        ],
  });
});

$(document).ready(function(){
  $('.featured__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: true,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-arrow-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-arrow-right"></i></button>`,
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 741,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: false //ẩn mũi tên
            }
          }
        ],
  });
});

$(document).ready(function(){
  $('.category__list').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: true,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-arrow-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-arrow-right"></i></button>`,
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 741,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: false //ẩn mũi tên
            }
          }
        ],
  });
});