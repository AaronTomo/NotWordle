
console.log("Hello, World!")

var str = "HELLO";
var strArr = str.split('', 5);
var row = 1;
var placer = 1;
var keyPress = false; //Needed to stop the user input from going back to 1-0
var userGuess = []
var winningInt = 0;

//----Once the body loads the input goes straight to 1-0 without clicking there------
function myFunction() {
    if (keyPress != true) {
        
        document.getElementById("1-0").focus();
        console.log(row + "-" + placer);
        keyPress = true;
}}


function jumper(field){
    if(field.value.length >= field.maxLength){

        if(placer == 5){
            submitFunc();
            row +=1;
            placer = 0;
        }
        document.getElementById(row + "-" + placer).focus();
        placer += 1;
        console.log(placer);
        
    }
}



function submitFunc() {

    for(var i = 0; i < str.length ; i++){

        var userIn = document.getElementById(row + "-" + i).value;
        userGuess.push(userIn.toUpperCase());
        
        if(userGuess[i] === strArr[i]) {

            console.log("Match");
            document.getElementById( row + "-" + i).style.backgroundColor = '#AFE1AF';   
            winningInt += 1;     
        }
        
        else{
            console.log("not a match");
            document.getElementById(row + "-" + i).style.backgroundColor = '#ff9999';
        }


    }

    if (winningInt == 5) {
        document.getElementById("notification").innerHTML = "You Won!!!";
    }
    userGuess = [];
    winningInt = 0;
    /*
    row = row+1;
    console.log(userGuess);
    console.log(row);

    if (row === 5) {
        document.getElementById("notification").innerHTML = "You lose!";
    } */
}

