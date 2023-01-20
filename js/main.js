const iconMenu = document.querySelector('.menu_icon>span');
const headerMenu = document.querySelector('.header_menu');
const headerNav = document.querySelector('.header_nav');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
        headerNav.classList.toggle('_active');
    });
}