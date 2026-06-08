function add(value){
 document.getElementById("result").value += value;
}

function calculate(){
 let x = document.getElementById("result").value;
 document.getElementById("result").value = eval(x);
}
