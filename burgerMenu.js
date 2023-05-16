let burgerMenu = document.querySelector('.burgerMenu')
let burgerMenu_navigation = document.querySelector('.burgerMenu_navigation')
let videoBtn = document.querySelectorAll('.controls-btn')

burgerMenu.onclick = function(){
    burgerMenu.classList.toggle('active')
    burgerMenu_navigation.classList.toggle('active')
}


videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active')
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src= src;
    });
});