function bmi(weight, height){
    let h = Math.pow(height, 2);
    let bmiCalc = Math.round(weight / h);
    console.log(bmiCalc);
}

bmi(88, 1.88);