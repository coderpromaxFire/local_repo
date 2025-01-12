let btn=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let h3=document.querySelector("h3");
let newbtn=document.querySelector(".newbtn");
let turnO=true;
const winpatterns=[[0,1,2],[3,4,5],[0,3,6],[0,4,8],[1,4,7],
[6,7,8],[2,5,8],[2,4,6]];
const newx=()=>{
    for(let box of btn){
    box.innerText=" ";
    turnO=true;
    box.disabled=false;
   
    h3.style.display="none";
    newbtn.style.display="none";
}
}
newbtn.addEventListener("click",()=>{
    newx();
})
const reset=()=>{
    for(let box of btn){
    box.innerText=" ";
    turnO=true;
    box.disabled=false;
   
    h3.style.display="none";
    newbtn.style.display="none";
}
}
resetbtn.addEventListener("click",()=>{
    reset();
})

btn.forEach((box)=>{
box.addEventListener("click",()=>{
if(turnO){
    box.innerText="O";
    turnO=false;
}
else{
    box.innerText="X";
    turnO=true;
}
box.disabled=true;
checkWinner();
})
})
const checkWinner=()=>{
    for( let pattern of winpatterns){

let pos1=btn[pattern[0]].innerText;
let pos2=btn[pattern[1]].innerText;
let pos3=btn[pattern[2]].innerText;
if(pos1!=""&& pos2!=""&& pos3!=""){
    if(pos1===pos2&&pos2===pos3){
        console.log("winner")
        h3.style.display="contents";
        newbtn.style.display="inline";
    }
}
    }
}