let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new_btn");
let msg=document.querySelector(".msg");
let msgshow=document.querySelector("#msg");

let turn=true;//playerx,playero
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let btnclicks=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn===true) {
            box.innerText="O";
            box.classList.add("ocolour");
            turn=false; 
            xturn();
        } else {
            box.innerText="X";
            box.classList.add("xcolour");
            turn=true;
            oturn();
        }
        box.disabled=true;
        btnclicks=btnclicks+1
        checkwinner();
    })
})
const checkwinner = () =>{
    for(pattern of winPatterns){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;
        if (pos1!="" && pos2!="" && pos3!="") {
            if (pos1===pos2 && pos2===pos3) {
                showwinner(pos1);
                btnclicks=0
            }
            
        }
        if (btnclicks===9){
            draw();
            btnclicks=0
        }
    }
}
const showwinner = (winner)=>{
    msgshow.innerText=`Congratulations, winner is ${winner}`;
    msg.classList.remove("hide");
    diasblebtns();

}
const diasblebtns = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const anablebtns = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.className = '';
        box.classList.add("box");
    }
}
const resetGame = () =>{
    turn=true;
    anablebtns();
    oturn();
    msg.classList.add("hide");
}
const draw= ()=>{
    msgshow.innerText=`Match is draw no winner`;
    msg.classList.remove("hide");
    diasblebtns();
}
const xturn= () =>{
    document.querySelector(".xturn").style.visibility="visible";
    document.querySelector(".oturn").style.visibility="hidden";
}
const oturn= () =>{
    document.querySelector(".oturn").style.visibility="visible";
    document.querySelector(".xturn").style.visibility="hidden";
}
oturn();
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);