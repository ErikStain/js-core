const user = {
    name: "Kiril",
    age: 17,
    mood: "Happy",
    skills: ["html","css","js"]
}

for (const key in user) {
    console.log(key);
    if (key==="skills") {
        user[key].push("react")
    }
    if (key==="mood") {
        user[key]= "Very happy"
    }
    if (key==="age") {
        delete user[key]
    }
}
console.log(user);


// Методы конструктора Object

// Object.keys(obj) - Преобразует объект в массив ключей

const userKeys = Object.keys(user)
console.log(userKeys);


// Object.values(obj) - Преобразует объект в массив значений

const userValuees = Object.values(user)
console.log(userValuees);


// Object.entries(obj) - Преобразует объект в массив массивов, внутри каждого только два элемента, ключ и его значение

const userEntries = Object.entries(user)
console.log(userEntries);