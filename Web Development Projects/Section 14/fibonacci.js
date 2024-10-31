function fib(n){
    let fibonacci = [];
    let num = 0;
    let num1 = num + 1;
    let num2;
    if (n == 1) {
        fibonacci.push(num);
        return fibonacci;
    } else if (n == 2) {
        fibonacci.push(num);
        fibonacci.push(num1);
        return fibonacci;
    } else {
        fibonacci.push(num);
        fibonacci.push(num1);
        for (j = 2; j < n; j++){
            num2 = num + num1;
            fibonacci.push(num2);
            num = fibonacci[fibonacci.length - 2];
            num1 = fibonacci[fibonacci.length - 1];
        }
        return fibonacci;
    }   
}

fib(7);