function revpymeid(n){
  var bag = ""
  for(var i=1;i<=n;i++){
      for(var j=1;j<i;j++){
          bag += " "
      }
      var count=1;
      for(var k=0;k<2*(n - i) + 1;k++){
          bag +=count 
          count++;
      }
      bag +="\n"
  }
  console.log(bag)
}
revpymeid(4)