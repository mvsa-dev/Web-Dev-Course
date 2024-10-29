function bottles() {
    let count = 99;
    for (i = 1; i < 99; i++) {
        wallCount = count - 1;
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.");
        console.log("Take one down and pass it around, " + wallCount + " bottles of beer on the wall.");
        count--;
    }
    console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}

bottles();