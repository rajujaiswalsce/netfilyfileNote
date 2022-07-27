function rightangle(N){
    var bag = "";
    for(var i=1;i<=N;i++){
        for(var j=0;j<N-i;j++){
            bag += " "
        }
        for(var k=0;k<i;k++){
            bag += "*"
        }
        bag +="\n"
    }
    console.log(bag);
}
rightangle(5);