const str1 = "You're catnip to a girl like me. Handsome, dazed,and to die for...";
console.log("Just string: " + str1);
let str1Concat;
str1Concat = "Concatenation: " + str1 + " -" + "Catwoman";
console.log(str1Concat);
let str1Length ="Length: " + str1.length;
console.log(str1Length);
let str1Index4 ="Charapter number 4 is: " + str1[4];
console.log(str1Index4);
let str1Upper ="To uppercase: " + str1.toUpperCase();
console.log(str1Upper);
//str1 end

const str2 = 'Batman: "I tried to save you."';
console.log("[Batman returns] " + str2);
//str2 end

const str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."';
let str3Repl = str3.replace(/catwoman/gi," ");
console.log(str3Repl);

alert(("Just string: " + str1) +
"\n" +
str1Concat +
"\n" +
str1Length +
"\n" +
str1Index4 +
"\n" +
str1Upper +
"\n" +
("[Batman returns] " + str2) +
"\n" +
str3Repl);