// if(true){
//     console.log("Привет")
// }
// if(true){
//     console.log("dfghj")
// }
// if(0){
//     console.log("458")
// }
// if(null){
//     console.log("458")
// }
// if(1){
//     console.log("458")
// }
// if(null){
//     console.log("hhh");
// }

// let num ="5";
// if(num>1){
//     console.log(`${num}>1`);
// }

// let num ="5.1 яблок";
// num=parseInt(num)
// if(num>1){
//     console.log(`${num}>1`);
// }

// let num ="5.1 яблок";
// num=parseFloat(num)
// if(num>1){
//     console.log(`${num}>1`);
// }

// let myNumber=2.445678
// console.log(myNumber.toFixed());

// console.log(myNumber.toFixed(3));

// console.log(Math.floor(myNumber));

// console.log(Math.ceil(myNumber));

// console.log(Math.round(myNumber));

// console.log(0.1+0.2);

let day = "friday";

function chooseDay(day){

    if(day === "monday") {
        console.log(`${day} it's work day`);
    } else if (day==="tuesday"){
        console.log(`${day} it's work day`);
    } else if (day==="wednesday"){
        console.log(`${day} it's work day`);
    } else if (day==="thurday"){
        console.log(`${day} it's work day`);
    } else if (day==="friday"){
        console.log(`${day} it's work day`);
    } else if (day==="saturday"){
        console.log(`${day} it's hollyday`);
    } else if (day==="sunday"){
        console.log(`${day} it's hollyday`);
    } else {
        console.log(`${day} - Не является днём.`);
    }
    
}

chooseDay("monday")
chooseDay("sunday")
chooseDay("blahblahblah")

function chooseDay1(day){
    if(day==="monday"||day==="tuesday"||day==="wednesday"||day==="thursday"||day==="friday"){
        console.log(`${day} it's work day`);
    } else if (day==="saturday"||day==="sunday"){
        console.log(`${day} hollyday`);
    }
}

let number = 0

function toCheckNum(num){
if (num > 10){
    console.log("Это число болше 10.");
} else {
    console.log("Условие не выполнено.");
}
}
toCheckNum(number)
number = 11
toCheckNum(number)
number = 5
toCheckNum(number)

function toCheckNum1(num){
    num > 10 ? console.log("Число больше требуемого."): console.log("Число не соответствует требованию.");
}

toCheckNum1(16)

function toCheckNum2(num){
    switch(num){
        case 1:
            console.log("Число равно 1");
            return;

        case 2:
            console.log("Число равно 2");
            return;

        case 3:
            console.log("Число равно 3");
            return;

        case 4:
            console.log("Число равно 4");
            return;

        case 5:
            console.log("Число равно 5");
            return

        default:
            console.log("Ни одно значение не совпало.");
    }
}
toCheckNum2(7)

function toCheckDay(day){
    switch(day){
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            console.log(`${day} it's work day`);
            return;

        case "saturday":
        case "sunday":
            console.log(`${day} it's hollyday`);
            return;

        default:
            console.log(`${day} - Не является днём.`);
    }
}
toCheckDay("sunday")
toCheckDay("wednesday")