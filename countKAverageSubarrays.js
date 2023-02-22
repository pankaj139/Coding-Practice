// Function to count subarray having average
// exactly equal to K
function countKAverageSubarrays(arr, n, k){
    const map = new Map();

    let curSum = 0;
    let result = 0;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        curSum += element - k;

        if (curSum === 0) {
            result++;
            
        }

        if(map.has(curSum)) {
            result += map.get(curSum);  
            map.set(curSum,map.get(curSum)+1);
        }
        else{
            map.set(curSum,1);
        }
        
        
    }
    return result;

}

// Driver code
 
// Given Input
let K = 4;
let arr = [1, 4, 2, 6, 10];
let N = arr.length;
 
// Function Call
console.log(countKAverageSubarrays(arr, N, K));
