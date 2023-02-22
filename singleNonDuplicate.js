
function singleNonDuplicate(arr) {
    let low = 0;
    let high = arr.length-1;

    while(low<high) {
        const mid = Math.floor((high + low) / 2);
        if(arr[mid] == arr[mid ^ 1]) {
            low = mid + 1;
        }
        else{
            high = mid;
        }
        
    }
    console.log(low);
    console.log(high);
    return arr[low];
    
}
const arr = [3,3,7,7,10,11,11];
console.log(singleNonDuplicate(arr));