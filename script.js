userInput = document.getElementById("userInput");
toCelsius = document.getElementById("toCelsius");
toFahrenheit = document.getElementById("toFahrenheit");
result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(userInput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + '℉';
    }
    else if(toCelsius.checked){
        temp = Number(userInput.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + '℃';
    }
}