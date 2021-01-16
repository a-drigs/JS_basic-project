// function firstElements(arr, n) {
//     let 
// }
function firstElements(arr, n) {
    return arr.slice(0,n);
  }
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  console.log(firstElements(numbers,8));

  function analog(arr, n) {
      return arr.slice(-8,n)
  }
  console.log(analog(numbers,9));
  //['2', '3', '4', '5', '6', '7', '8', '9']

// var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
// console.log(firstElements(heroes, 5));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
// console.log(firstElements(heroes, 1));
// // ["Captain America"]
// console.log(firstElements(heroes, 3));
// // ["Captain America", "Hulk", "Thor"]
// console.log(firstElements(heroes, 6));
// // ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
// console.log(firstElements(heroes, -1));
// // []