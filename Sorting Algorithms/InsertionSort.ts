/* For every number to insert in checks if the previous numbers are greater than it,
if yes it swaps the numbers until the next number is still lesser, 
and eventually it inserts the numberToInsert where the condition ends  */

function insertionSort(arr: number[]): number[] {
   for(let i=0; i< arr.length; i++){
        let numberToInsert = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
   }

   return arr;
}

console.log(insertionSort([-6,20,8,-2,4]));

//BigO = O(n^2)

