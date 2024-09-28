
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function calculate(){
   try{
    if (display.value.includes('%')) {
        let parts = display.value.split('%');
        if (parts.length === 2 && parts[1] === '') {
        display.value = (parseFloat(parts[0]) / 100).toString();
        } else if (parts.length === 2) {
        display.value = (parseFloat(parts[0]) * (parseFloat(parts[1]) / 100)).toString();
        } else {
        display.value = "Error";
        return;
        }
    } else {
        display.value = eval(display.value);
    }
    }
    catch(error){
        display.value = "Error";
    }
}
function clearDisplay(){
    display.value = "";
}
function removeLastChar(){
    display.value = display.value.slice(0, -1);
}