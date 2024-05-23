function mergeSort(arr: number[]): number[] {
    if(arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArray = arr.slice(0,mid);
    const rightArray = arr.slice(mid);

    return  merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray:number[], rightArray:number[]): number[] {
    const sortedArray: number[] = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift()!);
        }
        else {
            sortedArray.push(rightArray.shift()!);
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(mergeSort([8,20,-2,4,-6]));