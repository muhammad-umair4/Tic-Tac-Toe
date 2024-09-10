let boxes = document.querySelectorAll(".box");
let displayWin = document.querySelector(".displaywin");
let reset = document.querySelector(".reset");


let lines = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
];


let turn = true;


boxes.forEach((box) => {
        box.addEventListener("click", () => {
                if (turn) {
                        box.innerHTML = "O"
                        turn = false
                }
                else {
                        box.innerHTML = "X"
                        turn = true
                }
                box.disabled = true;
                winner();
        });
});

function winner() {
        for (let i = 0; i < lines.length; i++) {
                let line1 = boxes[lines[i][0]].innerText
                let line2 = boxes[lines[i][1]].innerText
                let line3 = boxes[lines[i][2]].innerText
                if (line1 !== "" && line2 !== "" && line3 !== "") {
                        if (line1 === line2 && line2 === line3) {
                                displayWin.innerHTML = `Congratulations ${line1} is Won`
                                boxes.forEach((box) => {
                                        box.disabled = true;
                                });
                        }
                }
        }

}

reset.addEventListener("click",()=>{
        turn = true;
        boxes.forEach((box) => {
                box.disabled = false;
                box.innerHTML = "";
                displayWin.innerHTML = "";
        });
});