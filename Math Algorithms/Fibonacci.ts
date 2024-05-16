function fibonacci(n: number): number[] {
    const sequenceArray: number[] = [0,1];

    for(let i=2; i<n; i++) {
        sequenceArray.push(sequenceArray[i-1]+sequenceArray[i-2]);
    }

    return sequenceArray; 
}

console.log(fibonacci(5));


// Big-O = O(n)