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
