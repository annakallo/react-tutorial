
export class CoolPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.coolAge = 4 * this.age;
    }

    walk() {
        console.log("walk");
    }
}

const person4 = new CoolPerson('Montegue', 42);
console.log(person4.name, person4.age, person4.coolAge)
