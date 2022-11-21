const modeButton = document.querySelector('#modebtn')
const navBar = document.querySelector('nav')
const modeContainer = document.querySelector('.checkmode')
const logo = document.querySelector('.logo')
const ListContainer = document.querySelector('.list')
const navButton = document.querySelector('.checkbtn')


modeButton.addEventListener('click', ()=>{
    navBar.classList.toggle('mode')
    logo.classList.toggle('mode')
    ListContainer.classList.toggle('mode')
})

navButton.addEventListener('click',()=>{
    ListContainer.classList.toggle('open')

});