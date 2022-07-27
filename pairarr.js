function pairarray(k,n,arr){
var count = 0;
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if((arr[i] - arr[j]) == k || arr[j]-arr[i] == k){
            count++;
        }
    }
}
console.log(count)
}
var x = [4,2,3];
var n = x.length;
var k = 2;
pairarray(k,n,x);