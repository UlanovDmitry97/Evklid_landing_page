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
