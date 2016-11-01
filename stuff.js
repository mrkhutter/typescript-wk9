console.log("hello world");

var myname = "mark";

function printNumbers(){
    var max = 100;
    for(let i = 0; i < max; i++){
        console.log("in my loop " + i);
    }

    // console.log("THE LAST LONG STMT" + i);
}

document.addEventListener("DOMContentLoaded", function(){
    printNumbers();
});