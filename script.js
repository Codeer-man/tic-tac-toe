let btn = document.querySelectorAll(".btn");
let box = document.querySelector(".box")
let resetbtn = document.querySelector(".reset-game")

let turn= document.querySelector(".turn");
let result= document.querySelector(".result");

let winpatter = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let player = true;
turn.textContent="X TURN"
btn.forEach(function(btn){
    btn.addEventListener("click",()=>{
        
        if(player){
            console.log("true");
            btn.textContent= "X";
            player= false;
            turn.textContent= "0 TURN"
        }else{
            btn.textContent= "0"
            turn.textContent= "X TURN"
            player = true;  
        }
    btn.disabled= true;
    // drawgame();
    winnercheck();
    checkDraw();
    })
})
resetbtn.addEventListener("click", function(){
    for(let button of btn){
        button.innerHTML = "";
        button.disabled = false;
    }
    result.textContent = "";
    // result.classList.add("hide");
    player = true;
    turn.textContent = "X TURN";
});
let disablebtn=()=>{
    for(let button of btn){
        button.disabled=true;
    }    
}
let winnercheck=()=>{
    for ( let patter of winpatter){
        let pat1 = btn[patter[0]].innerHTML;
        let pat2 = btn[patter[1]].innerHTML;
        let pat3 = btn[patter[2]].innerHTML;

        if(pat1 != ""&& pat2 != "" && pat3!= ""){
            if(pat1 == pat2 && pat2 ==pat3){
            disablebtn();
            result.textContent= "winner is "+pat1;
            // return true;
        }
        }
    }
    // return false;
}
let checkDraw = () => {
    // Assume all buttons are filled initially
    let allFilled = true;

    // Loop through each button to check if any button is empty
    for (let button of btn) {
        if (button.innerHTML === "") {
            allFilled = false;  // If any button is empty, set allFilled to false
            break;  // Exit the loop early as we found an empty button
        }
    }

    // If all buttons are filled and there is no winner, declare a draw
    if (allFilled && !winnercheck()) {
        result.textContent = "It's a draw!";
    }
};



