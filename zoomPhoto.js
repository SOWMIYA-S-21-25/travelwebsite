var photo = document.querySelectorAll('img')

photo.forEach(t => t.addEventListener('click', () =>{
    t.classList.toggle('activePhoto');
}));