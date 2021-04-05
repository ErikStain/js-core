// Функция высшего порядка - обычная функция принимающая в качестве аргумента другую функцию

function getResult(num1, num2, callBack) {
    return callBack(num1, num2)
}

function getSum(a, b) {
    return a+b
}

let result = getResult(1, 2, getSum)
console.log(result);
result = getResult(3 ,4, getSum)
console.log(result);
result = getResult(5, 6, getSum)
console.log(result);

function getPow(a, b) {
    return a**b
}

result = getResult(2, 3, getPow)
console.log(result);
result = getResult(5, 5, getPow)
console.log(result);