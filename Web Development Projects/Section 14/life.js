/* You have x days, y weeks, and z months left.
    Where x, y and z are replaced with the actual calculated numbers.
    For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.*/
function lifeInWeeks(age){
    let lifeExpectancy = 73;
    let x = (lifeExpectancy - age) * 365;
    let y = (lifeExpectancy - age) * 52;
    let z = (lifeExpectancy - age) * 12;
    console.log("You have " + x + " days, "+ y +" weeks, and " + z + " months left.");
}

lifeInWeeks(56);