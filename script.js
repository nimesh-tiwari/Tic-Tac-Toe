let boxes = document.querySelectorAll(".box");
let turnX = true;
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#show");
let resetBtn = document.querySelector("#reset");

const showWinner = (winner) => {
    msg.innerText = `Game Over\n${winner} won`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
    resetBtn.addEventListener("click",() => {
        location.reload();
    });

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnX){
            box.innerText = "X";
            turnX = false;
            
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const checkWinner = () => {
    let winnerFound = false;
    for(let pattern of win){
      let posOne = boxes[pattern[0]].innerText;
      let posTwo = boxes[pattern[1]].innerText;
      let posThree = boxes[pattern[2]].innerText;

      if(posOne != "" && posTwo != "" && posThree != ""){
          if(posOne === posTwo && posTwo === posThree){
            winnerFound = true;
            showWinner(posOne);
            return;
             
          }
      }

    }
    if(!winnerFound && isDraw()){
        msg.innerText = `Game Draw!`;
        msgContainer.classList.remove("hide");
        console.log(isDraw());
    }
};




const isDraw = () => {
    for (let box of boxes){
        if(box.innerText === ""){
            return false;
        }
    }
    return true;
};
