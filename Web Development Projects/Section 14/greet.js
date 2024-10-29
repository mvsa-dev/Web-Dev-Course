function greet(name) {
    let nameUpper = name.toUpperCase();
    let nameFirst = name[0];
    let nameRest = name.slice(1);
    let nameGreet = nameFirst + nameRest;
    console.log("Hello " + nameGreet);
}

greet("Musa_Dev");