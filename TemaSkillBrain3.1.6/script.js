// Exercitiul 1 // 

userInput = document.getElementById("userInput");
result = document.getElementById("result");
let userNo;
function isDivisible(){
    userNo = Number(userInput.value);
        if(userNo % 10 === 0){
            result.textContent = `${userNo} is divisible by 10`;
        }
        else{
            result.textContent = `${userNo} is not divisible by 10`;
        }
}

// Exercitiul 2 // 

childrenNo = document.getElementById("childrenNo");
partnerName = document.getElementById("partnerName");
userLocation = document.getElementById("userLocation");
futureJob = document.getElementById("futureJob");
userSubmit = document.getElementById("userSubmit");
fortuneResult = document.getElementById("fortuneResult");

userSubmit.onclick = function(){
    fortuneResult.textContent = `You will be a ${futureJob.value} in ${userLocation.value}, married to ${partnerName.value} and you will have ${childrenNo.value} kids`;
}


//Exercitiul 3 //

userNumber = document.getElementById("userNumber");
dayResult = document.getElementById("dayResult");
mySubmit = document.getElementById("mySubmit");
let weekDays = [null, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let x;

mySubmit.onclick = function(){
    x = Number(userNumber.value);
    switch(x){
        case 1:
            dayResult.textContent = `${weekDays[1]}`;
            break;
             
        case 2:
            dayResult.textContent = `${weekDays[2]}`;
            break;
             
        case 3:
            dayResult.textContent = `${weekDays[3]}`;
            break;
             
        case 4:
            dayResult.textContent = `${weekDays[4]}`;
            break;
             
        case 5:
            dayResult.textContent = `${weekDays[5]}`;
            break;
             
        case 6:
            dayResult.textContent = `${weekDays[6]}`;
            break;
             
        case 7:
            dayResult.textContent = `${weekDays[7]}`;
            break;
        default:
            dayResult.textContent = `${userNumber.value} is not a valid number, please insert numbers from 1 to 7 `;     
    }
}
