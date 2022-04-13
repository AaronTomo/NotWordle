
console.log("Hello, World!")

var str = "hello";
var strArr = str.split('', 5);
var row = 1;
var placer = 1;
var keyPress = false; //Needed to stop the user input from going back to 1-0
var userGuess = []

//----Once the body loads the input goes straight to 1-0 without clicking there------
function myFunction() {
    if (keyPress != true) {
        
        document.getElementById("1-0").focus();
        console.log(row + "-" + placer);
        keyPress = true;
}}

//---------------------- This function jumps from one input to the next---
/*
function jumper(field, placement){
    if(field.value.length >= field.maxLength){
        document.getElementById(placement).focus();
        
    }
}
*/
//-------------------------------------------------------------------------

function jumper(field){
    if(field.value.length >= field.maxLength){

        if(placer == 5){
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
        userGuess.push(userIn);


        //Need to gather the user input
        
        if(userGuess[i] === strArr[i]) {

            console.log("Match");
            document.getElementById( row + "-" + i).style.backgroundColor = '#AFE1AF';
            
            
        }
        
        else{
            console.log("not a match");
            document.getElementById(row + "-" + i).style.backgroundColor = '#ff9999';
        }


    }
    row = row+1;
    userGuess = [];
    console.log(userGuess);
    console.log(row);

    if (row === 5) {
        document.getElementById("notification").innerHTML = "You lose!";
    }
    

}

