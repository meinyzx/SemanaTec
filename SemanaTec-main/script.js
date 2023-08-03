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

        console.log(pessoaPosition)
        console.log(obstaculoPosition)

      if(obstaculoPosition < 120 && obstaculoPosition > 0 && pessoaPosition < 80)  { 

        obstaculo.style.animation = 'none';
        obstaculo.style.left = '${obstaculoPosition} px';

        pessoa.style.animation = 'none';
        pessoa.style.left = '${pessoaPosition} px';

        pessoa.src='pessoa.gameover.jpeg';
        pessoa.style.width= '75px';


      }

},10);

document .addEventListener('keydown', jump) 