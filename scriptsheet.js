
console.log("Hello, World!")

var str = "hello";
var strArr = str.split('', 5)
var levelArr = [0, 0]


function submitFunc() {

    var firStr = document.getElementById("1-0").value;

    for(var i = 0; i < str.length ; i++){

        if(strArr[0] === firStr) {
            console.log("Match");
            
        }else{
            console.log("not a match");
        }


    }


}

