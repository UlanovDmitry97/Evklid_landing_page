document.querySelector('#burger').addEventListener('click', function() {
  document.querySelector('#menu').classList.add('menu_active')
})

document.querySelector('#close').addEventListener('click', function() {
  document.querySelector('#menu').classList.remove('menu_active')
})
