// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const me = {
  firstName: "Mike",
  lastName: "Grilli",
  favoriteFood: "Pizza",
  bestFriend: {
    firstName: "Nicole",
    lastName: "Grilli",
    favoriteFood: "Thai"
  }
};

// 2. console.log best friend's firstName and your favorite food
const { favoriteFood, bestFriend } = me;
const bff = bestFriend.firstName;

console.log(`My best friends name is ${bff} and my favorite food is ${favoriteFood}`);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [ 
  ['-', 'O', '-'],
  ['-', 'X', 'O'],
  ['X', '-', 'X']
];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0][2] = 'O'

// 5. Log the grid to the console.
console.log(ticTacToe)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// The string:


// const  validateEmail = (email) => {
//   let emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//   let result = emailValidator.test(email);
  
//   if(result) {
//     console.log('Email passed the test!');
//   }
//   else {
//     console.log('Email not valid, please try again!');
//   }
// }
// validateEmail('mikeg@downtownseattle.org');

const validateEmail = (email) => {
  let emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let result = emailValidator.test(email);
  return result ? console.log('Email passed the test!') : console.log('Email not valid, please try again!')
}
validateEmail('mikeg@downtownseattle.org')

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


// 10. log this value using console.log
