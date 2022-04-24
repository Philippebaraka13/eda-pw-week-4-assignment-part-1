console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return'Hello'+ name;
}
console.log('Hello', helloName('snel'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
  
}
console.log(addNumbers(3, 5));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  let answer = num1 * num2 * num3;
  return answer;

} 
console.log(multiplyThree(2, 5, 4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else{ 
    return false;
  }
    
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let stars = ['ball', 'bike', 'car', 'book'];
function getLast( array ) {
  return array.length-1;
  } 
  
console.log('last item is', getLast(stars));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
// let a2 = ['bus', 'car', 'moto'];
function findValue(a2){
  for(let item of a2) {
    if(item === 'car' || item ==='bus' || item==='moto'){
       return true;
    }
    else {
    return false;
    }
  
  }
  
  }

  console.log('This is the value is', findValue('bus',['bus','car','moto']));
  console.log('This is the value is', findValue('moto',['bus','car','moto']))

// ----------------------
// Stretch Goals
 //----------------------
 //8. Function to check if a letter is the first letter in a 
   // string. Return true if it is, and false otherwise
// let letter =['apple', 'zelle'];
let letter ='';
function isFirstLetter(letter, string) {
  if(letter.charAt(0)=== 'a'){
    return true;
  }
  return false;
  
  }

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let arrayNum = [10, 20, 30];
let sum = 0;
function sumAll() {
  for(let i=0; i< arrayNum.length; i++){

  
  sum +=arrayNum[i];
  }
  return sum;

}
console.log(sumAll());

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let arrayZ =[2, 6, -6, -3];
function greaterZero(){
  for(let i=0; i<arrayZ.length; i++){
    if(arrayZ[i] > 0){
    console.log(arrayZ[i] + '');
    }
    return array;
  }
}
console.log(greaterZero());

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Given two numbers, return true if the sum 
// of both numbers is less than 100. Otherwise return false.

function numberBoth(a, b){
  if(a + b < 100) {
    return true;
  } else {
    return false;
  }
}  
console.log(numberBoth(544, 30));
console.log(numberBoth(59, 34));
console.log(numberBoth(45, 390));
console.log(numberBoth(50, 78));
console.log(numberBoth(54, 122));