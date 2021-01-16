function sortEvenOdd() {
    arr.sort( function(a,b) {
        return a - b;
    });
    arr.sort( function(a,b) {
        return (a % 2) - (b % 2);
    });
}
const arr = [1,17,7,15,16,9,11,13,12,2,3,4,14,5,6,8,10];
sortEvenOdd();
console.log(arr);
// const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
// sortEvenOdd(arr);
// console.log(arr); 
// (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15