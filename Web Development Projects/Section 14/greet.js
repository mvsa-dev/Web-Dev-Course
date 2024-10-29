function greet(name) {
    let nameFirst = name[0].toUpperCase();
    let nameRest = name.slice(1);
    console.log("Hello " + nameFirst + nameRest);
}
greet("musa");