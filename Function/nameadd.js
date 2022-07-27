// Given x =20

// Step 1 : Find Square of x
// Step 2 : Multiply the above result with 10
// Step 3 : print the step2 output

// Write three function
// 1. square of a number

function square(x)
{
 var sq = x*x;
 return sq;
}

// 2. Multiplication with 10

function multiply10(x)
{
var k = x*x;
return k;
}


// 3. printVariable 

function printVariable(x)
{
console.log(x)
}

var result1 = square(5);
var result2 = multiply10(result1);
printVariable(result2);
