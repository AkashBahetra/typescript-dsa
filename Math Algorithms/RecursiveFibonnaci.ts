//Give a number 'n', find the nth element of the Fibonacci sequence

function recursiveFibonacci(n: number): number {
    if( n < 2 ) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(6));

//Big-O = 2^n