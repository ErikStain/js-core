const numbers = [2,7,4,6,0,7,2,9,6]
let result = numbers.map((num)=>{
    console.log(num);
    return num+1
})
console.log(result);

result = numbers.map((num)=>{
    if (num%2!==0) {
        return num+""
    }
    return num
})
console.log(result);

result = numbers.filter((num)=>{
    return num>3
})
console.log(result);

result = numbers.filter((num)=>{
    return num%2===0
})
console.log(result);

result = numbers.filter((num)=>{
    return num%2!==0
})
console.log(result);

result = numbers.find((num)=>{
    return num%2===0
})
console.log(result);

result = numbers.find((num)=>{
    return num%2!==0
})
console.log(result);

const newArray = []
result = numbers.forEach((num)=>{
    console.log(num);
    newArray.push(num+100)
    // return num+1
    // return newArray
})
console.log(result);
console.log(newArray);

result = numbers.sort()
console.log(result);

result = newArray.sort()
console.log(result);
console.log(result.reverse());

const myArray = [1,24,11,38,3,14,45]
result = myArray.sort()
console.log(result);

result = myArray.sort((a,b)=>{
    return a-b
})
console.log(result);

result = myArray.sort((a,b)=>{
    return b-a
})
console.log(result);

const words = ["screen","apple","alpha","sansara"]
result = words.sort()
console.log(result);

result = numbers.some((num)=>{
    return num>0
})
console.log(result);

result = numbers.some((num)=>{
    return num===0
})
console.log(result);

result = numbers.some((num)=>{
    return num===100
})
console.log(result);

result = numbers.every((num)=>{
    return num===6
})
console.log(result);

result = numbers.every((num)=>{
    return num>0
})
console.log(result);

result = numbers.every((num)=>{
    return num<100
})
console.log(result);

result = numbers.reduce((acc, num)=>{
    acc=acc+num
    console.log("итерация",acc,num);
    return acc
},0)
console.log(result);

result = numbers.reduce((acc,num)=>{
    acc.push(num+"")
    return acc
},[])
console.log(result);