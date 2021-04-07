const user = {
    name: "Kiril",
    age: 18,
    mood: "Happy"
}
console.log(user);

user.name = "Kiryha"
console.log(user);

user["age"] = 17
console.log(user);

// Длбавить свойство в объект

user.mail = "blablabla@mail.com"
console.log(user);

user["phone"] = "1048506224"
console.log(user);

// Удалять свойства из объекта

delete user.mail
console.log(user);

user.updateName = function(value) {
    return user.name = value
}
user.updateName("Kiril")
console.log(user);

user.updateAge = function() {
    this.age = this.age+1
    return this.age
}
user.updateAge()
console.log(user);

const user2 = {
    name: "SerGay",
    age: 23,
}
// user2.updateAge()
console.log(user2);

console.log(user.updateAge);
user.updateAge.call(user2)
console.log(user2);

const product = {
    name: "Banana",
    weight: 2,
    toShowName() {
        console.log(this.name);
    }
}
product.toShowName()
product.toShowName.call(user)
product.toShowName.call(user2)

function createObject(a,b) {
    const product2 = {
        name: a,
        weight: b,
    }
    return product2
}
const newObject = createObject()
console.log(newObject);

const newObject1 = createObject("Apple",3)
console.log(newObject1);

function createNewObject(name,weight) {
    return {
        name,
        weight,
    }
}
const newObject2 = createNewObject("Grape",8)
console.log(newObject2);

const newObject3 = createNewObject("Melon",5)
console.log(newObject3);

// Деструктуризация объекта

const {name,weight}=newObject3
console.log(weight);
console.log(name);

const newObject4 = createNewObject(name,weight)
console.log(newObject4);

function createNewObject2({name,weight}) {
    return {
        name,
        weight
    }
}
const newObject5 = createNewObject2(newObject4)
console.log(newObject5);