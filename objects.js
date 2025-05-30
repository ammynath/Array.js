//objects are foundamentals to javascript, they are composite data types that allow you to store key and value types
//an object is a stand-alone entity with propersties and function
//{} brazzes in an object function representation.
//object values can beof 

const obj = {}
const datas = {
    user1 : "",
};

//Nested object

const student = {
    name: "Tosin",
    grades: {
        English: "A1", Biology: "B3", Physics: "B2",
    },
    ISActtive : true
};
console.log(student.name)

//prototype
const animal = {
    type: "unknown",
    sound: "none",
    makeSound () {
        console.log(this.sound);
    }
};

const dog = Object.create(animal);
dog.type = "dog";
dog.sound = "woof";

console.log(dog);

//object.assign

const defaultsettings = {theme: "light", fontsize: 16};
const usersettings = {fontsize: 18};
const finalsettings = Object.assign ({}, defaultsettings, usersettings);
console.log(finalsetting);

//objecs entries

const ent = [
    ["name", "Tosin, Jide"],
    ["age", 25],
];
console.log(Object.fromEntries(ent));

//using spread operator (...)
const original = {A : 77, B : 66}
const final = {...origin, c : 55}
console.log(final);