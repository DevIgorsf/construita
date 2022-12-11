const botaoMenu = document.querySelector('.header__menu')
const menu = document.querySelector('.header__navegacao')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('header__navegacao--ativo')
})