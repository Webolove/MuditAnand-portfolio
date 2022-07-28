const Hamburger = document.querySelector('.hamburger');
const MyList = document.querySelector('.navlist');

Hamburger.addEventListener('click', () => {
    Hamburger.classList.toggle('active');
    MyList.classList.toggle('show');
});

AOS.init({
    offset:200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})