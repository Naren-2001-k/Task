// const data = [30, 40, 2.5, "Hi", "Naren"]; // Array insertion
// console.log("Datas are:", data);

// // Length Of Array
// let length = data.length;
// console.log("Length are:", length);

// // Array at() Method
// let at_position = data.at(4);
// console.log("Posoition are:", at_position);

// // Array join() Method
// let join = data.join(" | ");
// console.log("Join are:", join);

// // Insert Value In Array Using push()
// data.push("Welcome");
// console.log("Push are:", data);

// // Delete Push Value In Array Using push()
// data.pop();
// console.log("Datas are:", data);

// Constructor Function
// function Information(name, age, rollno, dept) {
//   this.name = name;
//   this.age = age;
//   this.rollno = rollno;
//   this.dept = dept;
//   this.message = () => {
//     return "Good Morning";
//   };
// }
// const data = new Information("naren", 20, 16, "cs");
// const data1 = new Information("naveen", 20, 17, "cs");
// console.log(data, data.message());
// console.log(data1, data.message());

// // // Class Constructor
// class Person {
//   constructor(name, age, rollno, dept) {
//     this.name = name;
//     this.age = age;
//     this.rollno = rollno;
//     this.dept = dept;
//     this.message = () => {
//       return "Good Morning";
//     };
//   }
// }
// const data3 = new Information("lakshmanan", 20, 15, "cs");
// const data4 = new Information("dhuruvan", 20, 14, "cs");
// console.log(data3, data3.message());
// console.log(data4, data4.message());

// // let number = 10;

// function factorial(number) {
//   var result = 1;
//   for (i = 1; i <= number; i++) {
//     result = result * i;
//   }
//   console.log(`factorial of ${number} is ${result}`);
// }
// factorial(6);
// factorial(8);

// const array = [10, 15, 20, 25, 30, 35];
// var even = 0;
// var odd = 0;
// for (i = 0; i <= array.length; i++) {
//   array1(array[i]);
// }

// function array1(element) {
//   if (array[i] % 2 === 0) {
//     console.log(`even number is ${element}`);
//     even = even + array[i];
//   } else {
//     console.log(`odd number is ${element}`);
//     odd = odd + array[i];
//   }
// }

// function sum(a, b) {
//   console.log(`sum of  value is ${a + b}`);
// }
// sum(20, 40);

// const array1 = [10, 15, 20, 25, 30, 35];
// var sum = 0;
// var count = 0;
// for (i = 0; i <= array1.length; i++) {
//   sum = sum + array1[i];
//   if (sum != 0) {
//     count = sum / 6;
//     console.log(count);
//   } else {
//     console.log("oops");
//   }
// }

// array2 = [20, 34, 57, 20, 11, 9];
// function even(arr) {
//   for (i = 0; i <= arr.length; i++) {
//     console.log(arr.length);
//   }
// }
// even(array2);

// Print the variable
var firstName = "Bob";
function Printname(name) {
  // return "Hello " + name + "!";
  // return `Hello ${name}!`;
  return "Hello ".concat(name).concat("!");
}
var printfirst = Printname(firstName);
console.log(printfirst);

// Add variable and print
var print1 = "Hi";
var print2 = "Bye";
function Printtwostring(a, b) {
  return a + b + b + a;
}
var twostring = Printtwostring(print1, print2);
console.log(twostring);

// Print the variable HTML format
var itag = "i";
var content = "Yay";
function Printhtml(c, d) {
  console.log(`<${c}>${d}</${c}>`);
}
Printhtml(itag, content);

//  To print word inside the <<>>
var middle = "WooHoo";
function Inside(a) {
  return `<<${a}>>`;
}
var middleword = Inside(middle);
console.log(middleword);

// To print last two character using slice
var lastTwo = "Hello";
function Characters(twochar) {
  var lasttwochar = twochar.slice(-2);
  return lasttwochar + lasttwochar + lasttwochar;
}
var letters = Characters(lastTwo);
console.log(letters);

// To print First two character using slice
var firstTwo = "Welcome";
function Character(firsttwochar) {
  var starttwochar = firsttwochar.slice(0, 2);
  return starttwochar;
}
var word = Character(firstTwo);
console.log(word);

// To print the word even length
var length1 = "Narendhiran";
function Evenlength(l) {
  return l.slice(0, l.length / 2);
}
var equalLength = Evenlength(length1);
console.log(equalLength);

// To print the middle word of the given string
var length2 = "Naren";
function Evenlength1(l1) {
  return l1.slice(1, l1.length - 1);
}
var equalLength1 = Evenlength1(length2);
console.log(equalLength1);

// to print short + long + short
var short = "Hi";
var long = "Narendhiran";
function Longshort(s, lo) {
  if (s.length < lo.length) {
    console.log(s + lo + s);
  } else {
    console.log(lo + s + lo);
  }
}
Longshort(short, long);

// Given an array of ints, return True if 6 appears as either the first or last element in the array. The array will be length 1 or more.
var array1 = [1, 2, 6];
function array(ar) {
  return ar[0] === 6 || ar[ar.length - 1] === 6;
  // if (ar[0] === 6) {
  //   return true;
  // } else {
  //   if (ar[ar.length - 1] === 6) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
var ar6 = array(array1);
console.log(ar6);

var array2 = [1, 2, 6, 1];
function arrayEqual(ar1) {
  return ar1[0] === ar1[ar1.length - 1];
}
var arr = arrayEqual(array2);
console.log(arr);

// Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.
var array3 = [1, 2, 3];
var array4 = [4, 5, 3];
function twoArray(a3, a4) {}
twoArray(array3, array4);
