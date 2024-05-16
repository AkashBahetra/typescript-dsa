function factorial(n: number): number {
    let output: number = 1;

    for(let i=2; i<=n; i++){
        output *= i;
    }

    return output;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(9));

// Big-O = O(n)