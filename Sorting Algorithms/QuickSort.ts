/* Get's a pivot element, 
Moves all the element greater than pivot to right and lesser elements to the left,
Repeat until the left/right arrays have just 1 number left */

function quickSort(arr: number[]): number[]{

    if(arr.length < 2){
        return arr;
    }

    let pivot:number = arr[arr.length-1];
    let left:number[] = [];
    let right:number[] = [];

    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8,20,-2,4,-6]));

//BigO = O(nlogn)