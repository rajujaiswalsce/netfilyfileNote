
function reverseArray(a) {
    // Write your code here
      var rev = ""
     for(var i=a.length - 1 ;i>=0;i--){
         rev += a[i] + " " ;
     }
     console.log(rev);

}
var a = [1,2,3]
reverseArray(a)