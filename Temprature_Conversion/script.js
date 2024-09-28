const textBox = document.getElementById("textBox");
const Toferen = document.getElementById("Toferen");
const ToCelci = document.getElementById("ToCelci");
const result = document.getElementById("result");
let temp;

function convert(){
    
    if(Toferen.checked){
        temp = Number(textBox.value);
        temp = temp * (9/5) + 32;
        result.textContent = temp.toFixed(1) + '°F';

    }else if(ToCelci.checked){
        temp = Number(textBox.value);
        temp = (temp -32) * (5/9);
        result.textContent = temp.toFixed(1) + '°C';
    }else{
        temp = "Choose a Conversion";
    }
     
}

