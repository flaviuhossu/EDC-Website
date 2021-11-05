const bars = document.querySelector('.nav__menu__toggle-collapse')
const nav = document.querySelector('.nav')

bars.addEventListener('click', (event) => {
  nav.classList.toggle('toggle')
})

// in cazul in care Toggle ramane facut si se face resize peste media querry.
// TODO: sa nu hardcodezi acel 832. vezi cum poti face

const breakpointsSmall = getComputedStyle(
  document.documentElement
).getPropertyValue('--breakpoint-small')

console.log(breakpointsSmall)

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
