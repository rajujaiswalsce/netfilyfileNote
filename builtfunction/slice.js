function slice(days){
   var output = []
   var bag = ""
   for(var i=0;i<days.length;i++)
{
    if(days[i] !=" "){
        bag  +=days[i]
    }else{
        bag = ""
    }
} 
output.slice(1)  ;
return bag
    
}
var days = ["Sunday","Monday","Tuesday","wednesday","thursday","Friday","Satuday"]

console.log(slice(days))