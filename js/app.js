const bars = document.querySelector('.toggle-collapse');
const nav = document.querySelector('.nav')

bars.addEventListener('click',(event)=>{
nav.classList.toggle('toggle');
})