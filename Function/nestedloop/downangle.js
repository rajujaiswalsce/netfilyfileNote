function downtrigle(n){
    var bag = ""
    for(var i=0;i<n;i++){
        for(var j=0;j<n-i;j++){
            bag += "*" + " "
        }
        bag += "\n"
    }
    console.log(bag)
}
downtrigle(8);