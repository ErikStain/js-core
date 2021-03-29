const fruits = ['apple','peach','mellon']
console.log(fruits);
console.log(fruits.length);
fruits.push('grape')
console.log(fruits);
console.log(fruits.length);
fruits.push('pineapple','watermellon')
console.log(fruits);
console.log(fruits.length);
fruits.unshift('banana')
console.log(fruits);
console.log(fruits.length);
fruits.pop()
console.log(fruits);
console.log(fruits.length);
fruits.shift()
console.log(fruits);
console.log(fruits.length);
fruits.splice(3,1)
console.log(fruits);
console.log(fruits.length);

const numbers = [0,1,2,3,4,5]
console.log(numbers);
console.log(numbers.length);
numbers.splice(5)
console.log(numbers);
console.log(numbers.length);
numbers.splice(3,1)
console.log(numbers);
console.log(numbers.length);

const letters = ["A","B","C","D","E"]
console.log(letters);
console.log(letters.length);
letters.splice(2,0,2,3)
console.log(letters);
console.log(letters.length);
letters.splice(5,2,0,5)
console.log(letters);
console.log(letters.length);

const array = ["html","css"]
console.log(array);
console.log(array.length);
const myArray = array
myArray.push("js")
console.log(array);
console.log(myArray);

const mySliceArray = myArray.slice()
console.log(mySliceArray);
mySliceArray.shift()
console.log(array);
console.log(myArray);
console.log(mySliceArray);

const partOfArray = array.slice(2)
console.log(partOfArray);

const pieceOfArray = letters.slice(4,5)
console.log(pieceOfArray);

const newArray = fruits.concat(partOfArray,pieceOfArray)
console.log(newArray);
