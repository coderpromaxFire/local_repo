let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userScorepara=document.querySelector("#userscore");
const compScorepara=document.querySelector("#compscore");
const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
   const ranIdx= Math.floor(Math.random()*3);
   return options[ranIdx];
}
const drawGame=()=>{
    msg.innerText="Game was Draw";
    msg.style .backgroundColor="red";
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
msg.innerText="you win!!";
msg.style .backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;

        msg.innerText="Computer won ";
        msg.style .backgroundColor="red";
    }
}

const playGame=(userchoice)=>{
    console.log("user choice is",userchoice);
   const compchoice= genComputerChoice();
   if(userchoice==compchoice){
drawGame();
   }
   else{
    let userWin=true;
    if(userchoice=="rock"){
       userWin= compchoice=="paper"? false:true;
    }else if(userchoice=="paper"){
       userWin= compchoice==="scissor"? false:true;

    }else{
        userWin= compchoice==="rock"? false:true;
    }
    showWinner(userWin);
   }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice)
    })
})