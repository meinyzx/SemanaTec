const pessoa = document.querySelector('.pessoa');
const obstaculo = document.querySelector('.obstaculo');



const jump = () => {
  pessoa.classList.add(jump);

setTimeout(() =>{

const remove
pessoa.classList.remove(jump);
},500);


}




const loopgame = setInterval (()=> {

       const obstaculoPosition = obstaculo.offsetLeft;
      const pessoaPosition = +window.getComputedStyle(pessoa).bottom.replace('px','');

      console.log (obstaculoPosition )
      console.log( pessoaPosition)

      if(obstaculoPosition <= 120 && obstaculoPosition > 0 && pessoaPosition < 80)  { 

        obstaculo.style.animation = "none";
        obstaculo.style.left = '${obstaculoPosition}px' ;

        pessoa.style.animation = "none";
        pessoa.style.left = '${pessoaPosition}px' ;


        pessoa.src='./imagens/pessoa.gameover.png';
        pessoa.style.width= "75px";
        pessoa.style.marginleft="45px";

        clearInterval(loopgame)

      }
},5)

document .addEventListener('keydown', jump) 