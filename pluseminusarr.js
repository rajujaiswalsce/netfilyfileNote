function pluseminus(N,arr){
var positive = 0;
var negative = 0;
var zeros = 0;
for(var i=0;i<arr.length;i++){
    if(arr[i]>0){
        positive++;
    }else if(arr[i]<0){
        negative++;
    }else{
        zeros++;
    }
}
var total = N;
console.log(positive/total);
console.log(negative/total)
console.log(zeros/total)
}
var x = [-2,5,3,-9,6,-4]
var N = x.length;
pluseminus(N,x)