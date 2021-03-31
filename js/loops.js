const scores = [14,16,5,13,17,11,12,9,15,3]
// console.log(scores.length);

let total = 0
for(let elem of scores){
    // console.log(elem);
    total = total + elem
}
// console.log("total",total);
let result = total/scores.length
// console.log(result);

// преобразование строки в массив
let string = "numberless embarrassments which this double relationship had caused him, and of all the temporal reefs among which his spiritual bark had been forced to tack, in order not to suffer shipwreck on either Louis or Charles, that Scylla and that Charybdis which had devoured the Duc de Nemours and the Constable de Saint-Pol. Thanks to Heaven’s mercy, he had made the voyage successfully,"
const words = string.split(" ")

const validatedWords = []
for(let word of words){
    if(word.includes(",")){
        // console.log("includes ,", word);
        const arrayOfLetters = word.split("")
        // console.log(arrayOfLetters);
        for(let i=0; i<arrayOfLetters.length; i=i+1){
            // console.log(`${i+1} итеррация`,arrayOfLetters[i]);
            if(arrayOfLetters[i]===",") {
                arrayOfLetters.splice(i,1)
                console.log(arrayOfLetters);
            }
        }
        // arrayOfLetters[i].splice(index,1)
        word = arrayOfLetters.join('')
        console.log(word);
        validatedWords.push(word)
    }else{

        validatedWords.push(word)
    }
}
console.log(validatedWords);

const numbers = "1,2,3"
const arrayOfNumbers = numbers.split(",")
console.log(arrayOfNumbers);
const newNumbers = []
for(let number of arrayOfNumbers) {
    console.log(number);
    number = Number(number)
    console.log(number);
    number = number+100
    newNumbers.push(number)
}
console.log(arrayOfNumbers);
console.log(newNumbers);

for(let i=0; i<4; i=i+1) {
    console.log(arrayOfNumbers[i]);
    console.log(newNumbers[i]);
}