let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turnO = true;
let count = 0;

const winPatterns = [
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
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = chkWinner(box);

        if(count == 9 && !isWinner){
            drawGame();
        }
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        resetBtn.innerText = "Reset Game";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.innerText = "New Game";
};

const chkWinner = (box) =>
     {
        for(let pattern of winPatterns){
            let posVal1 = boxes[pattern[0]].innerText;
            let posVal2 = boxes[pattern[1]].innerText;
            let posVal3 = boxes[pattern[2]].innerText;
        
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                console.log("Winner", posVal1);
                showWinner(posVal1);
            }
        }
    }
 };


 const drawGame = () => {
    msg.innerText = "Draw Game";
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.innerText = "New Game";
 }


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

resetBtn.addEventListener("click", resetGame);











