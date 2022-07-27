

// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input
// ["MA", "SA", "I", "SCH", "OOL"]

// Sample Output
// ["ma","sa","i","sch","ool"]


function loweCase(n,str){
    var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
   var bag = ""
   for(var i=0;i<str.length;i++){
     var name = str[i];
     for(var j=0;j<lower.length;i++){
     if(name[j] == lower[j] ){
         bag = bag + lower[j];
     }
    
     }
      bag += "\n";
   }
   return bag
 } 
 var str = ["MA","SA","I","SCH","OOL"]
 var n = str.length;
  var result = loweCase(n,str)
 console.log(result)