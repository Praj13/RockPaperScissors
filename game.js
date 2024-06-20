let userScore=0;
let compScore=0;
let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");

const choices=document.querySelectorAll(".choice");

const generateCompChoice=()=>{
    //rock paper or scissors
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]; 
}

const drawGame=()=>{
    // alert("game drawn");
    msg.innerText="Game drawn, play your move again.";
    msg.style.backgroundColor="081b31";

}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        // alert("you won");
        userScore++;
        uScore.innerText=userScore;
        msg.innerText=`you won, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        // alert("you lost");
        compScore++;
        cScore.innerText=compScore;
        msg.innerText=`you lost, ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor="red";


    }
}


const playGame=(userChoice)=>{
    alert("your choice = "+userChoice);
     //generate computer choice-> modular way of programming
     const compChoice=generateCompChoice();
     alert("computer's choice = "+compChoice);

     if(userChoice===compChoice){
        drawGame();
     }
     else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
     }



};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

if(userChoice=="rock" && compChoice=="paper"){
    alert("computer wins");
    compScore++;
}
else if(userChoice=="paper" && compChoice=="rock"){

}