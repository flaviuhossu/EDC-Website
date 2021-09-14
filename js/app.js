const bars = document.querySelector('.toggle-collapse')
const nav = document.querySelector('.nav')
const video = document.querySelector('.video-container')
const welcomeHeader = document.querySelector('.welcome-header::after')

bars.addEventListener('click', (event) => {
  nav.classList.toggle('toggle')
})

if (nav.classList.contains('toggle')) {
  welcomeHeader.classList.add('toggled-welcome')
}

// in cazul in care Toggle ramane facut si se face resize peste media querry.
// TODO: sa nu hardcodezi acel 830. vezi cum poti face
window.addEventListener('resize', (event) => {
  console.log(window.innerWidth)
  if (window.innerWidth > 830) {
    nav.classList.remove('toggle')
  }
})

// PRELOADER
const preloader = document.querySelector('.preloader')

window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader')
  video.classList.add('show-video')
})
