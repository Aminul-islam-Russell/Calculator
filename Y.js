const input = document.querySelector("#input");

function addInput(number) {
  input.value += number;
 
}


function result() {
  if (input.value) {
    input.value = eval(input.value);
   
  }
 

}  
function Clear (){

  input.value = "";
}
function del (){

  input.value =  input.value.slice(0,-1);
}






