const pessoa = document.querySelector('.pessoa');
const obstaculo = document.querySelector('.obstaculo');

const jump = () => {
  pessoa.classList.add('jump');

  setTimeout(()=> {
               pessoa.classList.remove('jump')


  }, 500);
}

const loop = setInterval(() =>{

        const obstaculoPosition = obstaculo.offsetLeft;
        const pessoaPosition = window.getComputedStyle(pessoa).bottom.replace('px');

        console.log(marioPosition)
        console.log(obstaculoPosition)

      if(obstaculoPosition < 120 && obstaculoPosition > 0 && pessoaPosition < 80)  { 

        obstaculo.style.animation = 'none';
        obstaculo.style.left = '${obstaculoPosition} px';

        mario.style.animation = 'none';
        mario.style.left = '${marioPosition} px';

        mario.src='pessoa.gameover.jpeg';
        mario.style.width= '75px';


      }

},10);

document .addEventListener('keydown', jump) 