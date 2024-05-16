function isPowerOfTwoModulo(n: number): boolean {
    if(n < 1) {
        return false;
    }

    while(n>1){
        if(n%2 !== 0) {
            return false
        }
        n = n/2;
    }

    return true;
}

function IsPowerOfTwoBitwise(n: number): boolean{
    if(n<1){
        return false;
    }

    return (n & (n-1)) == 0
}

console.log(isPowerOfTwoModulo(1));
console.log(isPowerOfTwoModulo(2));
console.log(isPowerOfTwoModulo(5));

//Big-O O(logn)

console.log(IsPowerOfTwoBitwise(1));
console.log(IsPowerOfTwoBitwise(2));
console.log(IsPowerOfTwoBitwise(5));

//Big-O O(1)