const bars = document.querySelector('.toggle-collapse')
const nav = document.querySelector('.nav')
const video = document.querySelector('.video-container')
const welcomeHeader = document.querySelector('.welcome-header')

bars.addEventListener('click', (event) => {
  nav.classList.toggle('toggle')
  if (nav.classList.contains('toggle')) {
    console.log('yes')
    welcomeHeader.classList.add('toggled-welcome')
    // welcomeHeader: after.classList.add('toggled-welcome')
  } else welcomeHeader.classList.remove('toggled-welcome')
})

// in cazul in care Toggle ramane facut si se face resize peste media querry.
// TODO: sa nu hardcodezi acel 830. vezi cum poti face
window.addEventListener('resize', (event) => {
  console.log(window.innerWidth)
  if (window.innerWidth >= 832) {
    nav.classList.remove('toggle')
  }
  if (nav.classList.contains('toggle')) {
    console.log('yes')
    welcomeHeader.classList.add('toggled-welcome')
    // welcomeHeader: after.classList.add('toggled-welcome')
  } else welcomeHeader.classList.remove('toggled-welcome')
})

// PRELOADER
const preloader = document.querySelector('.preloader')

window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader')
  video.classList.add('show-video')
})

// SET DATE
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// Ajustam inaltimea lui welcome-header deoarece, in momentul in care apasam pe toggle menu, se duce mai jos.
