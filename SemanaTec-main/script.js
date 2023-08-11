let pessoa = document.querySelector('.pessoa');
let obstaculo = document.querySelector('.obstaculo');

function remove(){
  pessoa.classList.remove('jump');

}



function jump () {
  pessoa.classList.add('jump');

setTimeout(remove,500);

 
}




function loopgame(){

        let obstaculoPosition = obstaculo.offsetLeft;
      let pessoaPosition = +window.getComputedStyle(pessoa).bottom.replace('px','');
      

      if(obstaculoPosition <= 120 && obstaculoPosition > 0 && pessoaPosition < 80)  { 

        obstaculo.style.animation = 'none';
        obstaculo.style.left = '${obstaculoPosition} px' ;

       

        pessoa.src='./imagens/pessoa.gameover.png';
        pessoa.style.width= '75px';


      }

}

let loop= setInterval(loopgame,10);

document .addEventListener('keydown', jump) 