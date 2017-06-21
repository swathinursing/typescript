let myString, newString: string;
let myNum: number;
let myBoolean: boolean;
let myVar: any;


let strArr: string[];
let numArr: number[];
let boolArr: boolean[];

//Other ways of declaring arrays

let stringArr: Array<string>;
let numberArr: Array<number>;

//Tuple declaration
let strNumTuple: [string, number];
let numStrTuple: [number, string];
let boolNumTuple: [boolean, number];

//play with null void undefined
let myVoid: void = null;
let myNull: null = undefined;
let myUndefined: undefined = null;

myString = "Hello"+ " Modern " +"Typescript";
newString = "Name".slice(1,2);
myNum = 22;
myBoolean = false;
myVar = true;
strArr = ["Name", "Number", "Address"];
numArr = [1,2,3,4,5,6];
boolArr = [true, false];
stringArr = ["My", "Name", "is", "Anish"];
numberArr = [1,2,3,4,5,6,7,8];
strNumTuple = ["hello", 34];
numStrTuple = [12, "my Number"];
boolNumTuple = [true, 21,2,3,4,5,6,7];

console.log(myString);
console.log(myNum);
console.log(myBoolean);
console.log(newString);


console.log(myVar);
console.log(strArr);
console.log(numArr);
console.log(boolArr);

console.log(stringArr);
console.log(numberArr);

console.log(strNumTuple);
console.log(numStrTuple);
console.log(boolNumTuple);

console.log(myNull);
console.log(myVoid);
console.log(myUndefined);