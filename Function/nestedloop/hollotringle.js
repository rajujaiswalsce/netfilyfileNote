function holotringle(n){
var bag = ""
for(var i=0;i<n;i++){
    for(var j=0;j<i+1;j++){
        if(i==n-1){
            bag +="*"
        }else{
            if(j==0 || j==i){
                bag +="*"
            }else{
                bag +=" "
            }
        }
    }
    bag += "\n"
}
console.log(bag)
}
holotringle(6)