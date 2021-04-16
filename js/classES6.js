class User {
    constructor(a,b) {
        this.name = a;
        this.age = b;
    }
    changeAge () {
        return this.age = this.age+1
    }
}

const user1 = new User("Kiril",17)
console.log(user1);

user1.changeAge()
console.log(user1);