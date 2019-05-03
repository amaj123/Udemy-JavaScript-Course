/*******************************************
 * Variable and data types
 * 
 */
/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";

console.log(job);
// Variable naming rules

var $3years = 3;
var JohnMark = "john and mark";
var ifsa = 23;
*/

/**************************************************
 * Variable mutation and type coercion
 * 
 */

/**
 * 
 
 var firstName ="John"
 var age = 28;

// Type coersion
console.log(firstName + " "+ age);

var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job +". Is he married? " + isMarried);

// Variable mutation- change the value of a variable
age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job +". Is he married? " + isMarried);
// alert makes a pop up box

//prompt("What is his last name? ");
// takes input from the user

var lastName = prompt("What is his last name?");
console.log(firstName + " " +lastName);

/*

/************************************************
 * Basic Operators
 * 
 */

/*
 var now, birthYearJohn, birthYearMark;
now = 2020;
var ageJohn = 28
var ageMark = 33;


// Math operators
birthYearJohn = now - ageJohn;
birthYearMark = now - ageMark;
console.log(birthYearJohn);
console.log(birthYearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Type of operator- tells you what the type of operator is
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "mark is older than john");
var xyz;
console.log(typeof xyz);

/*


/*********************************
 * Operator precedence
 * 
 */
/*
 var now, yearJohn, fullAge;
 now = 2019;
 yearJohn = 1989;
 fullAge = 18;

 //Multiple operators
 var isFullAge = now - yearJohn >= fullAge;//true
 console.log(isFullAge);

 //Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments

var x, y;
x = y = (3 + 5 ) * 4 - 6; // 8 * 4 - 6; // 32 - 6 //26
console.log(x, y);

// assignment works by going left to right, the calculation gets assigned to y which
// then gets assigned to x

// More operators

// this is the same as the next statement below x = x * 2;
x *= 2;
console.log(x);
x += 10 ;
console.log(x);
x++ // add one to x
console.log(x);
x--
console.log(x);

/*

/*****************************************************
 * Coding Challenge 1
 * 
 

var markHeight, markMass, johnHeight, johnMass, johnBmi, markBmi;
markHeight = 1.67;
markMass = 75;

johnHeight = 1.99;
johnMass = 92;

johnBmi = johnMass / (johnHeight * johnHeight);
markBmi = markMass / (markHeight * markHeight);
console.log(johnBmi, markBmi);



var bmiCompare = markBmi > johnBmi;
console.log("Is Mark\'s has a higher bmi than John\'s?"+ " " + bmiCompare);

*/





















