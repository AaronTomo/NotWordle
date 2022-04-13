
console.log("Hello, World!")

var str = "hello";
var strArr = str.split('', 5);
var row = 1;
var userGuess = []


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
    

}

