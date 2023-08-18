const peesoa = document.querySelector(".pessoa");
const obstaculo = document.querySelector(".obstaculo");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!peesoa.classList.contains("jump")) {
    pessoa.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
     pessoaclassList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

setInterval(() => {
  let pessoaBottom = parseInt(
    window.getComputedStyle(pessoa).getPropertyValue("bottom")
  );
  let obstaculoLeft = parseInt(
    window.getComputedStyle(obstaculo).getPropertyValue("left")
  );

  if (obstaculoLeft > 40 && obstaculoLeft < 270 && pessoaBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);