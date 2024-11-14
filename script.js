// alert("helo")
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");

let turnO = true;
let winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      checkWin();
    } else {
      box.innerText = "X";
      turnO = true;
      checkWin();
    }
    box.disabled = true;
  });
});

const checkWin = () => {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        msg.innerText = `Congratulation Player ${pos1} wins!`;
        // resetBoxes();
      }
    }
  }
};

const resetBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turnO = true;
};

reset.addEventListener("click", () => {
  msg.innerText = "";
  resetBoxes();
});
