
const display = document.getElementById('output');

function append(input){
    display.value += input
}

function cleardisplay(){
    display.value = "";
}

function calculate(){
   try {
    display.value = eval(display.value)
    
   } catch (error) {
    display.value = "Error"
   }
}