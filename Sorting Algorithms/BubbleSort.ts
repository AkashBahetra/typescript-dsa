/* Checks the next element on every iteration and swap if needed, 
it iterates until there were no swaps */

function bubbleSort(arr: number[]): number[] {
    let swapped = true;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)

    return arr;
}

//Big-O = O(n^2)

console.log(bubbleSort([-6,20,8,-2,4]));