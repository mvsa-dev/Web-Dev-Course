/*BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight." */





function bmiCalc(weight, height){
    let h = Math.pow(height, 2);
    let bmi = Math.round(weight / h);

    if (bmi < 18.5) {
        console.log("Your BMI is " + bmi + ",  you are underweight.");
    } else if (bmi > 24.9) {
        console.log("Your BMI is " + bmi + ",  you are overweight.");
    } else {
        console.log("Your BMI is " + bmi + ", so you are normal weight.");
    }
}

bmiCalc(88, 1.87);