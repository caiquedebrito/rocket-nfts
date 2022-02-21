const btnMenu = document.getElementsByClassName('bars')[0]
const btnDiv = document.getElementsByClassName('button')
const navLinks = document.getElementsByClassName('nav-links')


btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('animation')
    btnDiv[0].classList.toggle('toggle')
    navLinks[0].classList.toggle('toggle')
})