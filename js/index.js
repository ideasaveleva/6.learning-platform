const menuBar = document.querySelector('.menu-bar-icon')
const menuClose = document.querySelector('.menu-close')
const menuBlock = document.querySelector('.menu-block')
const actionBtn = document.querySelector('#actionBtn')

const controlActive = function () {
  menuBlock.classList.toggle('active')
  menuBlock.classList.toggle('animate__animated')
  menuBlock.classList.toggle('animate__bounce')
  menuBlock.classList.toggle('animate__delay-1s')
}

menuBar.addEventListener('click', controlActive)
menuClose.addEventListener('click', controlActive)

actionBtn.addEventListener('click', event => {
  if (event.target.id === 'btn') {
    alert(`Вы нажали кнопку: ${event.target.innerHTML}`)
  } else if (event.target.id === 'search') {
    alert('Форма для поиска по сайту')
  }
})
