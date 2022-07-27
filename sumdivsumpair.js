function sumpair(k,n,arr){
var count =0;
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
        if((arr[i]+arr[j])%k ==0){
        count++;
        }
    }
}
console.log(count)
}
var x = [2,5,2]
var n = x.length;
var k = 2;
sumpair(k,n,x)