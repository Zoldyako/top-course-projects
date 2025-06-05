function fibonacci(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;

    console.log("This was printed recursively!");
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(7);
console.log(result);