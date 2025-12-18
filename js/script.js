const wrapper = document.querySelector('.banner-wrapper');
const banners = document.querySelectorAll('.banner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const total = banners.length;

function moveBanner() {
  wrapper.style.transform = `translateX(-${index * 1920}px)`;
}

// 다음
nextBtn.addEventListener('click', () => {
  index = (index + 1) % total;
  moveBanner();
});

// 이전
prevBtn.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  moveBanner();
});

// 자동 롤링
setInterval(() => {
  index = (index + 1) % total;
  moveBanner();
}, 5000);


function initTopButton(){
  const topBtn = document.getElementById("topBtn");
  if (!topBtn) return;

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTopButton();
  initRollingBanner();
});