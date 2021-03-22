//function expression объявление
const myFunc = function() {
    let a=5;
    console.log(a);
}
//вызов функции
myFunc()

const myFunc1 = function() {
    let a=1
    let b=2
    let result = a+b
    return result
}
myFunc1()
console.log(myFunc1());

const myFunc2 = function() {
    let x = "1";
    let y = 1;
    let result = x+y
    return result
}
console.log(myFunc2());
let result = myFunc2();
console.log(result);
let z = 10
let total = result+z
console.log(total);

const myFunc3 = function(a,b) {
    let result = a+b
    return result
}
result = myFunc3(1,2)
console.log(result);

result = myFunc3(6,"h")
console.log(result);

result = myFunc3(3,"g",7)
console.log(result);

let a=100
let b=63
result = myFunc3(a,b)
console.log(result);

a="Kiril "
b=78
result=myFunc3(a,b)
console.log(result);

a=1000
b="10"
result =  myFunc3(a,b)
console.log(result);

const myFunc4 = function(param1, param2, param3) {
    return param1+param2+param3
}
result = myFunc4(a,z,b)
console.log(result);

const myFunc5 =  function(a,b,z=0) {
    return a+b+z
}

let result1 = myFunc5(1,2)
console.log(result1);

result1 = myFunc5("d",8,"k")
console.log(result1);

const myFunc6 = function(a=1,b=2,c=3) {
    return a+b+c
}

result1 = myFunc6()
console.log(result1);

function toBuyeProducts(meat,milk,bread) {
    console.log(`Я купил: ${meat}, ${milk}, ${bread}`);
}
toBuyeProducts("Курятина","Молоко","Бородинский")
toBuyeProducts("Телятина","Сливки","Багет")
toBuyeProducts("Баранина","Айран","Чёрный")

const toBuyeProducts1=(meat,milk,bread)=> {
    console.log(`Я купил: ${meat}, ${milk}, ${bread}`);
}
toBuyeProducts1("Курятина","Молоко","Бородинский")
toBuyeProducts1("Телятина","Сливки","Багет")
toBuyeProducts1("Баранина","Айран","Чёрный")

const toBuyeProducts2 = function(meat,milk,bread) {
    console.log(`Я купил: ${meat}, ${milk}, ${bread}`);
}
toBuyeProducts2("Курятина","Молоко","Бородинский")
toBuyeProducts2("Телятина","Сливки","Багет")
toBuyeProducts2("Баранина","Айран","Чёрный")

