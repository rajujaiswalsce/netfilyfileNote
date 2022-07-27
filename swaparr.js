function swaparr(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=1;j<=arr.length;j++){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        }
        console.log(arr)
    }
    
}
var x = [10,2,5,12,7]

swaparr(x)