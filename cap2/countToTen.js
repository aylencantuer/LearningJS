//would reside in the same folder as your HTML document.

function countToTen(){
    var count= 0;
    while (count<10){
        count++;
        document.getElementById("theCount").innerHTML += count + "<br>";
    }
}