function mobileMenu(){
    let mobileMenu = document.querySelector('.menu_mobile');
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open')
    } else {
        mobileMenu.classList.add('open')
    }
}