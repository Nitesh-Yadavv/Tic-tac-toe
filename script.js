let boxes =document.querySelectorAll(".box");
let msg= document.querySelector(".msg");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
const winArray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

let trunO=true;
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(trunO){
            box.innerText = "O";
            trunO=false;
        }
        else{
            box.innerText = "X";
            trunO=true;
        }
        count++;
        box.disabled=true; 
        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }   
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
  };
  
const checkWinner = () =>{
    for( let array of winArray){
        let _1st= boxes[array[0]].innerText;
        let _2nd= boxes[array[1]].innerText;
        let _3rd= boxes[array[2]].innerText;
        if (_1st != "" && _2nd != "" && _3rd != "")
        if(_1st===_2nd && _2nd===_3rd){
            showWinner(_1st);
            return true;
        }
     }
}

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msg.classList.remove("hide");
    disableBoxes();
  };

  const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msg.classList.add("hide");
  };

  newGameBtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click", resetGame);

