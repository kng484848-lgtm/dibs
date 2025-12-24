//#header gnb 이동하기
$(function () {
  let headerH = $('.inner_header').outerHeight();

  $('.nav a').on('click', function (e) {
    e.preventDefault();

    let target = $(this).attr('href');
    let offsetTop = $(target).offset().top - headerH;

    $('html, body').animate({ scrollTop: offsetTop }, 600);
  });
});


//visual swiper
var swiper = new Swiper(".visualSwiper", {
  slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
  spaceBetween: 0, // 슬라이드 사이 여백
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop: true, // 슬라이드 반복 여부
  pagination: {
    el: "#banner-container .swiper-pagination",
    clickable: true,  // 불렛 버튼 클릭 여부
  },
});

//topBtn 버튼 
$(function () {
  //맨 위 부드럽게 이동
  $("#topBtn").click(function () {
    $("html,body").animate({
      // 세로위치 0
      scrollTop: '0'
      //1초동안
    }, 1000);
  });

  //일정 구간부터 버튼 나타나게 하기
  $("#topBtn").hide();
  // 스크롤하면,
  $(window).scroll(function () {
    // 100보다 크면 보이고, 100보다 작으면 사라진다.
    if ($(this).scrollTop() > 100) {
      $("#topBtn").fadeIn()
    } else {
      $("#topBtn").fadeOut()
    }
  });
});
