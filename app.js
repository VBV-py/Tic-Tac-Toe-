let boxes = document.querySelectorAll(".box");
let rst = document.querySelector(".reset");
let newgame = document.querySelector("#newb");
let msgbox = document.querySelector(".msgbox");
let msg = document.querySelector("#msg");

let turnX = true;//player x or y
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetG = () => {
    turnX = true;
    boxen();
    msgbox.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const boxdis = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const boxen = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} You Won !`;
    msgbox.classList.remove("hide");
    boxdis();
}
const checkwinner = () => {
    for (let i of win) {
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}

rst.addEventListener("click", resetG);
newgame.addEventListener("click", resetG);