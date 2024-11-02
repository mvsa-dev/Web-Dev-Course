function bmi(weight, height) {
  let value = weight / Math.pow(height, 2);
  if (value > 30) return value + " Obese";
  if (value > 25) return value + " Overweight";
  else if (value <= 18.5) return value + " Underweight";
  else return value + " Normal";
}
console.log(bmi(100, 1.8));
/*Write function bmi that calculates body mass index (bmi = weight / height2).
    if bmi <= 18.5 return "Underweight"
    if bmi <= 25.0 return "Normal"
    if bmi <= 30.0 return "Overweight"
    if bmi > 30 return "Obese" */
