let greeting = "hello world";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);


let text = "hello world";
let extractedText = text.slice(6);
console.log(extractedText);


let sentence = "JavaScript is awesome";
let hyphenatedSentence = sentence.replace(/ /g, "-");
console.log(hyphenatedSentence);


let name = "Mr. Smith";
let startsWithMr = name.startsWith("Mr");
console.log(startsWithMr); 


let phrase = "apple,banana,orange";
let fruitArray = phrase.split(",");
console.log(fruitArray); 

let numStr = "42";
let num = parseInt(numStr);
console.log(num); 


let price = 19.9876;
let roundedPrice = price.toFixed(2);
console.log(roundedPrice)

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); 


let result = 0/0;
let isNaN = Number.isNaN(result);
console.log(isNaN); 


let value = 255;
let hexValue = value.toString(16);
console.log(hexValue);


let fruits = ["apple", "banana"];
fruits.push("grape");
console.log(fruits);


let colors = ["red", "green", "blue"];
colors.shift();
console.log(colors);
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinedArray = arr1.concat(arr2);
console.log(combinedArray);


let letters = ["a", "b", "c"];
letters.reverse();
console.log(letters);


let groceries = ["apple", "orange", "banana"];
let hasBanana = groceries.includes("banana");
console.log(hasBanana); 
 
let person = { name: "John", age: 30 };
let age = person.age;
console.log(age); 


let car = { make: "Toyota" };
car.model = "Camry";
console.log(car);



let student = { name: "Alice", grade: "A" };
let keys = Object.keys(student);
console.log(keys);



let user = { name: "Bob", password: "123" };
delete user.password;
console.log(user);



let contact = { name: "Sarah", phone: "555-1234" };
let hasEmail = "email" in contact;
console.log(hasEmail);
