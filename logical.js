/* //  problem1--
var x = 2;
console.log(x);


x = 3;
console.log(x);

var y = 7;
console.log(y);

y = 20;

var z = 10;
console.log(z);

z = "cat" ;
console.log(z);

z = 10.5; */
//problem 2--
/* var a = 2;
var b = 3;
var c = "hello";

console.log(a,b,c);
console.log(a+b+c);


// Case 2  : Integers

var m = 2;
var n = 3;
console.log(m+n);
console.log(m,n);


// Case 3 : Strings

var x = "hello";
var y = "world";
console.log(x+y);
console.log(x,y);


// Case 4 : Integer with strings
var a = 2;
var b = "hello";

console.log(a,b);
console.log(a+b);


// Case 5 : "\n"

var a = 2;
var b = "hello";
console.log(a,"\n",b);*/

// problem--
/*var a = true;
var b = false;

console.log(a||b);

a = true;
b = true;
console.log(a||b);

a = false;
b = true;
console.log(a||b);

a = false;
b = false;
console.log(a||b);*/

// problem3---
// Dinner possible or not

var potato_available = true;
var paneer_available = false;

if(potato_available || paneer_available)
{
  console.log("Dinner Party");
}
else
{
  console.log("No Dinner");
}
var gender = "female";
var age = 25;

// if(gender == "male" && age >= 21)
// {
//   console.log("Male : Can get marry");
// }
// else if(gender == "female" && age >= 18)
// {
//   console.log("Female : Can get marry");
// }
// else
// {
//   console.log(gender,": Can't get marry");
// }

var A = (gender == "male" && age >= 21);
var B = (gender == "female" && age >= 18);

if( A || B)
{
  console.log(gender,": Can get marry");
}
else
{
  console.log(gender,": Can't get marry");
}
// Given days in short format : I need print in long format

var day = "mon";

switch(day)
{
  case "mon" : console.log("Monday");
                break;
  case "tue" : console.log("Monday");
                break;
  
  default : console.log("Invalid day");
}

//problem
var a = 4>5;
var b = 3>10;

console.log("Value of a",a);
console.log("value of b",b);

var c = a && b;
console.log(c);

// Given 3 numbers, which is greater

var a = 13;
var b = 5;
var c = 10;


if((a>b) && (a>c))
{
  console.log("a is greater");
}

else if((b>a) && (b>c))
{
  console.log("b is greater");
}

else if((c>a)&&(c>b))
{
  console.log("c is greater");
}

else{
  console.log("All are equal");
}


// Given a character, if it is a consonant print "consonant"

var ch = "="

if((ch != "a") && (ch != "e") && (ch!="i") && (ch != "o") && (ch != "u"))
{
  console.log("consonant");
}
else
{
  console.log("Not consonant");
}


var ch = "f";

switch(ch)
{
  case "a" : 
  case "e" :
  case "i" :
  case "o" :
  case "u" : break;
  default : console.log("consonant");
            break;
}

// Given any character , if it is a vowel then print its a vowel
// aeiou

var ch = "f";
if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch=="E")
{
  console.log("its a vowel");
}
else
{
  console.log("not vowel");
}


switch(ch)
{
  case "a" :
  case "e" :
  case "i" :
  case "o" :
  case "u" : console.log("vowel");
             break;
  default : console.log("not vowel");
            break;
}


// IW Assignment

// problem 1 : Given the year of birth, if the age is between 13 and 19 (both included) print "Teenage" and if it is between 20 and 29(both included) then print twenties otherwise print "NA"

var yob = 1996;
var age = 2022 - yob;

console.log(age);

if((age>=13) && (age<=19))
{
  console.log("Teenage");
}
else if((age>=20) && (age<=29))
{
  console.log("Twenties");
}
else
{
  console.log("NA")
}

// Switch Statement


// var choice = 5;


// switch(choice)
// {
//   case 1 : console.log("Code 1");
//            break;

//   case 2 : console.log("Code 2");
//            break;

//   case 3 : console.log("Code 3");
//            break;

//   default : console.log("Wrong Choice");
//             break;

// } 




var choice1 = "tuesday";


switch(choice1)
{
  case "monday" : console.log("Relat & comp Operator");
                  break;

  case "tuesday" : console.log("Conditional Statement");
                   break;

  case "wednesday" : console.log("Logical Operator");
                     break;

  default : console.log("Wrong Choice");
            break;

}

var expr = ( ((5>3) || (4<2)) && ((2<5) && (4>2)) );


console.log(expr);




// Problem 

// JEE Mains
// JEE Advanced

var mains = true;
var advanced = true;


if(mains)
{
  if(advanced)
  {
    console.log("Welcome to IIT");
  }
}

if(mains && advanced)
{
  console.log("Welcome to IIT");
}





var expr = (5<4) && ("ramu"=="pappu") && (2>1) && (4<1);

console.log(expr);


