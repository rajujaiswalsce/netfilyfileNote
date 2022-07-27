
// 9. Hollow pyramid star pattern

function starpyd(n){
    var bag = ""
    for(var i=1;i<=n;i++){
        for(var j=0;j<n-i;j++){
            bag += " "
        }
        for(var k=0;k<2*i - 1;k++){
            if(i==1 || i==n){
                bag +="*"
            }else{
                if(k==0 || k == 2*i - 2 ){
                    bag +="*"
                }else{
                    bag +=" "
                }
            }
           
        }
        bag +="\n"
    }
    console.log(bag)
}
starpyd(5);