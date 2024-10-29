function whoPays(array){
    let names = array;
    let listLength = names.length;
    let nameRandom = Math.floor(Math.random() * listLength)
    let youPay = names[nameRandom];
    console.log(youPay + " settles the bill.");
}

whoPays(["Musa", "Olwethu", "Thando", "Nkosi"]);