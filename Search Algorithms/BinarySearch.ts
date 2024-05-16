function BinarySearch(arr: number[], target: number): number{

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex){
        let middle = Math.floor((rightIndex + leftIndex)/2);
        if(arr[middle] == target){
            return middle;
        }

        if(arr[middle] > target){
            rightIndex = middle - 1;
        }
        else{ 
            leftIndex = middle + 1;
        }
    }

    return -1;
}

//Big-O = O(logn)

console.log(BinarySearch([-5,2,4,6,10], 6));
