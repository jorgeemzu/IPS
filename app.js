const mobileMenu = document.querySelector('.mobile__nav--menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show__menu');
        console.log('owrk')
})