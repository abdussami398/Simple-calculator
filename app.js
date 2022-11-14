function getnum(num){
    var result = document.getElementById("xyz")
    result.value += num;

}



function clr() {
    var result = document.getElementById("xyz");
    result.value = "";
}


function getNumber() {
    var result = document.getElementById("xyz");
    result.value = eval(result.value);
}


function backsp(){
    var value = document.getElementById("xyz").value;
    document.getElementById("xyz").value = value.substr(0, value.length - 1);
    
    
} 


function sq(){
    var result = document.getElementById("xyz");
    result.value = eval(result.value)**2;
}


function sqrt(){
    var result = document.getElementById("xyz");
    result.value = Math.sqrt(eval(result.value));
}