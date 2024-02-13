let button = document.querySelector('.burger')
let nav = document.querySelector('.nav')

button.addEventListener('clicker', function(){
    nav.classList.toggle('clicked')
})