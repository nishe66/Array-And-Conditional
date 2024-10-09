// problem-5:Weather check

let temperature = 15;
let isRaining = true;
let isSunny = true;

if(temperature < 0){
    console.log("Heavy Jacket");
}
else if(temperature <= 20 && isRaining === true){
    console.log("Raincoat and Sweater");
}
else if(temperature > 20 && isSunny === true){
    console.log("T-Shirt and Sunglass");
}
else {
    console.log("Regular clothes");
}

// answer is:Raincoat and Sweater