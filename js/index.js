document.querySelector('#burger').addEventListener('click', function() {
  document.querySelector('#menu').classList.add('menu_active')
})

document.querySelector('#close').addEventListener('click', function() {
  document.querySelector('#menu').classList.remove('menu_active')
})

const swiper = new Swiper('.swiper-container', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  },
});

document.querySelectorAll('.how-we-working__step-btn').forEach(tubsBtn => {
  tubsBtn.addEventListener('click', event => {
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.tab-content').forEach(tubsContent => {
      tubsContent.classList.remove('tab-content_active')
    })

    document.querySelectorAll('.how-we-working__step-btn').forEach(tubsBtn => {
      tubsBtn.classList.remove('how-we-working__step-btn_active')
    })

    document.querySelector(`[data-path="${path}"]`).classList.add('how-we-working__step-btn_active')
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content_active')
  })
});


$(function () {
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
  });
});
