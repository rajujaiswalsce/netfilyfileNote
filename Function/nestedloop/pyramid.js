function pyramied(n){
var bag = ""
for(var i=1;i<=n;i++){
    for(var j=0;j<n-i;j++){
        bag +=" "
    }
    for(var k=0;k<2*i-1;k++){
        bag += "*"
    }
    bag +="\n"
}
console.log(bag)
}
pyramied(8)