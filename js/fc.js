function User(a,b) {
    this.name = a;
    this.age = b;
}
// Методы для будущих объектов необходимо прописывать в свойство prototype функции конструктора
User.prototype.changeAge = function () {
    return this.age = this.age+1
}

const user1 = new User("Kiril",17)
console.log(user1);

const user2 = new User("EvGayniy",20)
console.log(user2);

const user3 = new User("Daniil",20)
console.log(user3);

user1.changeAge()
console.log(user1);

user2.changeAge()
console.log(user2);

user3.changeAge()
console.log(user3);