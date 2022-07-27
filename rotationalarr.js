
function totational(k,n,arr){
    k = k%n ;
    var bag = ""
    for(var i=0;i<arr.length;i++){
        if(i<k){
            bag  += arr[n+i-k] +" "
        }else{
            bag += arr[i - k] + " "
        }
      //  bag +="\n"
        
    }
    console.log(bag)
}
var x = [1,2,3,4]
var n = x.length;
var k = 2;
totational(k,n,x)