let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".btn1");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;
const winpatterns = [ // definning patterns for winning it is considered to be good to define it in increasing order of first index;
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
 const resetgame = ()=>{ // We will use this "resetgame" function in both of the buttons "Reset game" & "New game".
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");

 };

boxes.forEach((box) =>
{
    box.addEventListener("click", ()=>
    {
        console.log("Box was clicked");
        if (turn0)        // if(turn0) is same as if(turno == true);
            {
                box.innerText = "O";
                turn0 = false;
            }
        else
            {
                box.innerText = "X";
                turn0 = true;
            }
            
            box.disabled = true;
            checkwinner();
    })

})

const disableBox = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBox = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



const showwinner = (Winner)=> { // function to show winner;
       msg.innerText = `Congraturlation, Winner is ${Winner}`;
       msgContainer.classList.remove("hide"); // this hide class is a secondary class of "msg-container" which is  removeing hide msg to show winner;
       
       disableBox(); // when anyone of them wins ("X" & "O") then all of the boxes will be disabled;

};

const checkwinner = ()=>{
    for (let pattern of winpatterns){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val != "" && pos2val != "" && pos3val !=""){
            if (pos1val === pos2val && pos2val === pos3val){ // this condition is for checking the all the positions/boxes has same entry like only "O" / only "X";
                console.log("Winner", pos1val);
                showwinner(pos1val); //in this showwinner function we are passing the value that who is the winner because eventually it will be shown as a pop up
            }
        }

    }
}
    
newbtn.addEventListener("click", resetgame);
resetbutton.addEventListener("click", resetgame);