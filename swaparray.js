function swaparr(arr){
    for(var i=0;i<arr.length;i++){
        temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    console.log(arr);
}
var x = [10,2,5,12,7]

swaparr(x)