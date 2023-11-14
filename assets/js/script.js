let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe')
 
let jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

}


let loop = setInterval(()=> {
    let pipeposition = pipe.offsetleft;
    let marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
 
    if (pipeposition <= 120 && pipeposition > 0 && marioposition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = './assets/img/game-over.webp';
        mario.style.width = '75px'
        mario.style.marginleft = '50px'

        clearInterval(loop);


    } },10 );
    





document.addEventListener('keydown', jump);


