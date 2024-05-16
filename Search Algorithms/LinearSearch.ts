function LinearSearch(arr:number[], target:number): number{
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
 
console.log(LinearSearch([-5,2,10,4,6], 10));

//Big-O == O(n);