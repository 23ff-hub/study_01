window.onload = function () {
    let play = document.querySelector('.play')
    let video = document.querySelector('video');
    let pase = document.querySelector('.pase');
    play.addEventListener('click', function () {
        video.style.display = 'block';
        play.style.display = 'none';
        pase.style.display = 'block';
        pase.innerHTML='X';
    })
    pase.addEventListener('click', function () {
        video.style.display = 'none';
        play.style.display = 'block';
        pase.textContent ='';
    })
}
