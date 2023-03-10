// Data
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 
    'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 
    'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 
    'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 
    'Berlin, Irving', 'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 
    'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 
    'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano', 'Berne, Eric', 
    'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 
    'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 
    'Biondo, Frank'
];

//1. Used filter() to return an arrray of inventors born in the 1500 
const fifteen = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year <= 1599) {
        return true;
    } else {
        return false;
    }
});
// console.log(fifteen); ***
// or console.table(fifteen) for tabular view

//2. Used map() to return inventors full names
const fullName = inventors.map(function(inventor) {
  return `${inventor.first} ${inventor.last}`;
});
//console.table(fullName);

//3. Used sort() to organize inventors by year from least year to greatest year
const sortedByYear = inventors.sort(function(a, b) {
    if (a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
}); 

// const sortedByYear = inventors.sort((a, b) => a.year > b.year ? 1 : -1); This line is a substitute to above.
// console.table(sortedByYear);

//4. Used reduce() to get sum total of years lived by all inventors
/* var totalYears = 0;
for (var i = 0; i < inventors.length; i++) {
    totalYears += inventors[i].year;
}; */
// console.log(totalYears);

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
// console.log(totalYears);

//5. Used sort() to sort inventors by years lived
const sortedByYearsLived = inventors.sort(function(a, b) {
    const firstGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    if (firstGuy > nextGuy) {
        return -1;
    } else {
        return 1;
    }
    // or simply return firstGuy > nextGuy ? -1 : 1;
});
// console.log(sortedByYearsLived);

//6. Create a list of boulevards in Paris that contain "de" anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/* const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes("de")); */
// console.log(de);

//7. Sort Exercise: To sort the people alhabetically by last name
const nameSort = people.sort(function(lastOne, nextOne) {
    const parts = lastOne.split(", "); //This splits the names in an array using the ", "(comma & whitespace) and puts the splitted items in an array as two separate elements excluding the comma and whitespace.
    const [aLast, aFirst] = lastOne.split(", "); //This destructures the array "parts" above.What this means is since its a 2-element array, you can assign the two elements to a variable by doing [variableName1, variableName2].
    const [bLast, bFirst] = nextOne.split(", ");
    return aLast > bLast ? 1 : -1;
});
// console.log(nameSort);

//8. continue from 20:08

