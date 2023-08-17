const pessoa = document.querySelector('.pessoa');
const obstaculo = document.querySelector('.obstaculo');
const score = document.querySelector('.score');
let alreadyjump = false;
let count = 0;

document.addEventListener("keydown", (e) =>{
  if((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();}
});

function jump () {
  if(!pessoa.classList.contains("jump")){
    pesssoa.classList.add("jump");
    alreadyjump = true;

    setTimeout(()=>{
      pessoa.classList.remove("jump");
      alreadyjump=false;  
    },1100)
  }
}

setInterval (() => {

  let pessoabottom = parseInt(
    window.getComputedStyle(pessoa).getPropertyVallue("bottom")
  ); 
   let obstaculoleft = parseInt(
    window.getComputedStyle(obstaculo).getPropertyVallue("left")
   );

   if (obstaculoleft > 40 && obstaculoleft < 270 && pessoabottom <= 50 && !alreadyjump) {
    alert ('game over! seu score foi: ${count}'); count=0;
   }
   count++; score:innerHTML = 'SCORE:${count}';
},10)





