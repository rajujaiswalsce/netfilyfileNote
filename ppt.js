// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
   // if name1 and name2 are same , then print Both names are equal


   var name1 = "rahul";
   var name2 = "rahul";
   if(name1==name2){
       
   console.log("yes this is equal");
   }
   
   // var a =15;
   // var b = 10;
   //  if(a>b){
   //      console.log(a,"is greater then ",b);
   //  }
    
    if(0){
        console.log("false");
    }
    
    // Check whether two numbers are equal
   
   var a = 2;
   var b = 2;
   var c = (a==b) ;
   if(c){
       console.log("yes");
   }
   // Check which number is greater
   
   var a1 = 3;
   var b1 = 20;
   if(a1>b1){
       console.log("a is greater than b ");
   }else{
       console.log("b is greater than a")
   }
   
   // Given total_bill, discount_start_price.
   // if eligible then print Discount Available
   // otherwise print Discount Not Available
   
   var total_bill = 699;
   var discount_start_price = 500;
   
   if(total_bill>=discount_start_price){
       console.log("Discount Available");
   }else{
       console.log("Discount Not Available");
   }
   
   var rice_available = true;
   var wheat_available = true;
   var apple_available = true;
   if(rice_available){
       console.log("get the rice");
   }else if(wheat_available){
       console.log("get the wheat");
   }else if(apple_available){
        console.log("get the apple");
   }else{
        console.log("not anything");
   }
   
   // Given total_bill
   
   // total_bill
   
   // Greater Than 500.      10 % Discount
   // Greater Than 1000.     20 % Discount
   // Otherwise              No discount
   
   var total_bill = 799;
   
   if(total_bill>500){
       console.log("10 % Discount");
   }else if(total_bill>1000){
       console.log("20 % Discount");
   }else {
       console.log("No Discount");
   }


   //note of condition//
 /*  NOTES
If Statements
We saw before that the Boolean operator has only 2 values, true and false. Now we can use these values in a meaningful way to write code.

The if statement executes a block of code only when a specified condition is true. If it is false it executes the else statement.

Syntax:
if (condition)
   statement1
[else
   statement2]
Example 1:

var username = "Masai"
if(username == "Masai"){
	console.log("Welcome to Masai School!")
}
else{
	console.log("Invalid User")
}
Example 2:

var age = 15
if(age >= 18){
	console.log("You can vote!")
}
else{
	console.log("You cannot vote!")
}
Check the result of the above programs on your Web-browsers console!

Else-If Statement:
The else if statement allows you to check for another condition.

Syntax:
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
...
else
  statementN
Example:

if( 10 > 5 ){
    console.log('YES')
}
else {
    console.log('NO')
}

NOT operator
The ! operator returns false when the input is true. It returns true when the input is false.

Note: This is an unary operator which means it only has one input

Example:

!true
!false 
Output:

false
true 
if(contion1){
    if(condition2){
        //run
    }else {
        //run
    }
}  else if(contion3){
    //run
}else{
    //run
}    */