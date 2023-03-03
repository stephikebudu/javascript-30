// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];



// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

//This is block of code does the same thing as the second and third block of code
const isAdult = people.some(function(person) {
  const currentYear = (new Date()).getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});


//Repitition: this block of code compresses the above code
/* const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
}); */


//Repitition 2: this block of code compresses further
/* const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19); */

console.log({isAdult});

  

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id === 823423 ? true : false); 

console.log(comment);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);

console.log(index);

//Using splice to delete
comments.splice(index, 1);