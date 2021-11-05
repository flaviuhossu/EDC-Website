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
// TODO: sa nu hardcodezi acel 832. vezi cum poti face
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

///////////////////////////////////////////////
////////////////////GALERIE////////////////////
///////////////////////////////////////////////
//Aici importam descrierile pentru fiecare imagine
// import * as imagesDescriptions from '../src/galerie/imagesDescription.js'

// function imageGallery() {
//   const galleryHeader = document.querySelector('.gallery-header')
//   const galleryParagraph = document.querySelector('.gallery-paragraph')

//   //////////////
//   const highlight = document.querySelector('.gallery-highlight')
//   const previews = document.querySelectorAll('.gallery-preview img')

//   previews.forEach((preview) => {
//     preview.addEventListener('click', function () {
//       const smallSrc = this.src
//       const bigSrc = smallSrc.replace('mic', 'mare')
//       highlight.src = bigSrc

//       //asa putem accesa ultimul item din url-ul sursa fara "mare.jpg"
//       const lastItem = bigSrc
//         .substring(bigSrc.lastIndexOf('/') + 1)
//         .slice(0, -9)
//       console.log(lastItem)
//       console.log(imagesDescriptions.imagesText[0])
//       switch (lastItem) {
//         case 'bucatarie':
//           galleryHeader.innerHTML = imagesDescriptions.imagesHeader[0]
//           galleryParagraph.innerHTML = imagesDescriptions.imagesText[0]
//           break
//         case 'electrician':
//           galleryHeader.innerHTML = imagesDescriptions.imagesHeader[1]
//           galleryParagraph.innerHTML = imagesDescriptions.imagesText[1]
//           break
//         case 'bormasina':
//           galleryHeader.innerHTML = imagesDescriptions.imagesHeader[2]
//           galleryParagraph.innerHTML = imagesDescriptions.imagesText[2]

//           break
//         case 'doze':
//           galleryHeader.innerHTML = imagesDescriptions.imagesHeader[3]
//           galleryParagraph.innerHTML = imagesDescriptions.imagesText[3]
//           break
//         case 'tablou':
//           galleryHeader.innerHTML = imagesDescriptions.imagesHeader[4]
//           galleryParagraph.innerHTML = imagesDescriptions.imagesText[4]
//           break
//         default:
//       }

//       //for the fading effect
//       previews.forEach((preview) => preview.classList.remove('gallery-active'))

//       preview.classList.add('gallery-active')
//     })
//   })
// }
// //invocam functia de mai sus
// imageGallery()

/////////////CAROUSEL////////////////
// const track = document.querySelector('.carousel__track')

// const slides = Array.from(track.children)

// const nextButton = document.querySelector('.carousel__button--right')
// const prevButton = document.querySelector('.carousel__button--left')

// const dotsNav = document.querySelector('.carousel__nav')
// const dots = Array.from(dotsNav.children)

// var slideWidth = slides[0].getBoundingClientRect().width
// track.addEventListener('resize', (e) => {
//   slideWidth = slides[0].getBoundingClientRect().width
// })

// //arrange the slides next to each other

// const setSlidePosition = (slide, index) => {
//   console.log(slideWidth)
//   slide.style.left = slideWidth * index + 'px'
// }

// slides.forEach(setSlidePosition)

// const moveToSlide = (track, currentSlide, targetSlide) => {
//   track.style.transform = 'translateX(-' + targetSlide.style.left + ')'

//   //assign the nextSlide the "current-slide" class
//   currentSlide.classList.remove('current-slide')
//   targetSlide.classList.add('current-slide')
// }
// //Update the dots
// const updateDots = (currentDot, targetDot) => {
//   currentDot.classList.remove('current-slide')
//   targetDot.classList.add('current-slide')
// }
// //Show/Hide arrows

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//   if (targetIndex === 0) {
//     prevButton.classList.add('is-hidden')
//     nextButton.classList.remove('is-hidden')
//   } else if (targetIndex === slides.length - 1) {
//     prevButton.classList.remove('is-hidden')
//     nextButton.classList.add('is-hidden')
//   } else {
//     prevButton.classList.remove('is-hidden')
//     nextButton.classList.remove('is-hidden')
//   }
// }

// // When I click left, move slides to the left
// prevButton.addEventListener('click', (e) => {
//   const currentSlide = track.querySelector('.current-slide')
//   const prevSlide = currentSlide.previousElementSibling
//   const currentDot = dotsNav.querySelector('.current-slide')
//   const prevDot = currentDot.previousElementSibling
//   const prevIndex = slides.findIndex((slide) => slide === prevSlide)

//   moveToSlide(track, currentSlide, prevSlide)
//   updateDots(currentDot, prevDot)
//   hideShowArrows(slides, prevButton, nextButton, prevIndex)
// })
// // When I click right, move slides to the right

// nextButton.addEventListener('click', (e) => {
//   const currentSlide = track.querySelector('.current-slide')
//   const nextSlide = currentSlide.nextElementSibling
//   const currentDot = dotsNav.querySelector('.current-slide')
//   const nextDot = currentDot.nextElementSibling
//   const nextIndex = slides.findIndex((slide) => slide === nextSlide)

//   moveToSlide(track, currentSlide, nextSlide)

//   updateDots(currentDot, nextDot)

//   hideShowArrows(slides, prevButton, nextButton, nextIndex)
// })

// // When I click to the nav indicators, move to that slide

// dotsNav.addEventListener('click', (e) => {
//   const targetDot = e.target.closest('button')

//   // If i did not click on a button, exit function
//   if (!targetDot) return

//   const currentSlide = track.querySelector('.current-slide')
//   const currentDot = dotsNav.querySelector('.current-slide')

//   //the button i clicked on
//   const targetIndex = dots.findIndex((dot) => dot === targetDot)
//   //now we know which slide we need to go
//   const targetSlide = slides[targetIndex]
//   //calling the function to go to that slide
//   moveToSlide(track, currentSlide, targetSlide)

//   updateDots(currentDot, targetDot)

//   hideShowArrows(slides, prevButton, nextButton, targetIndex)
// })

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const auto = false
const intervalTime = 5000
let slideInterval

const nextSlide = () => {
  //get current class
  const current = document.querySelector('.current')
  //remove current class
  current.classList.remove('current')
  //check for next slide
  if (current.nextElementSibling) {
    //add current to the next sibling
    current.nextElementSibling.classList.add('current')
  } else {
    //add current to start
    slides[0].classList.add('current')
  }
  setTimeout(() => {
    current.classList.remove('current')
  })
}
const prevSlide = () => {
  //get current class
  const current = document.querySelector('.current')
  //remove current class
  current.classList.remove('current')
  //check for previous slide
  if (current.previousElementSibling) {
    //add current to the previous sibling
    current.previousElementSibling.classList.add('current')
  } else {
    //add current class to the last one
    slides[slides.length - 1].classList.add('current')
  }
  setTimeout(() => {
    current.classList.remove('current')
  })
}
//Button events
next.addEventListener('click', (e) => {
  nextSlide()
  if (auto) {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, intervalTime)
  }
})
prev.addEventListener('click', (e) => {
  prevSlide()
  if (auto) {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, intervalTime)
  }
})

// Auto-slide
if (auto) {
  //run next-slide @ Interval time
  slideInterval = setInterval(nextSlide, intervalTime)
}
