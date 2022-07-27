

function leftangle(n){
    var bag = ""
    // var count =0;
    for(var i=1;i<=n;i++){
        for(var j=0;j<i;j++){
            bag +="*"
            // count++
        }
       
        bag +="\n"
    }
    console.log(bag)
}
leftangle(6)