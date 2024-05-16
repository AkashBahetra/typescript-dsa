function recursiveBinarySearch(arr:number[], target: number){
    return search(arr, target, 0, arr.length-1);
}

function search(arr: number[], target: number, leftIndex: number, rightIndex: number){
    if(leftIndex > rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((rightIndex+leftIndex)/2);
    if(target === arr[middleIndex]){
        return middleIndex;
    }

    if(target > arr[middleIndex]){
        return search(arr, target, middleIndex+1, rightIndex);
    }
    else{
        return search(arr, target, leftIndex, middleIndex-1);
    }
}

//Big-O = O(logn)

console.log(recursiveBinarySearch([-5,2,4,6,10], 6));