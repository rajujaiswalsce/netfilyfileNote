function hollowsqure (N){
 var bag = "";
  for(var i=0;i<N;i++){
      for(var j=0;j<N;j++){
          if(i ==0 || i ==N-1){
              bag += "*"
          }else{
              if(j ==0 || j ==N-1){
                  bag +="*"
              }else{
                  bag += " "
              }
          }
      }
      bag += "\n"
  }
  console.log(bag)
}
hollowsqure(5)