// var   function scoped
// let   block scoped
// const  block scoped  - can not be reassigned

// import {Teacher} from "./teacher";  // in case Teacher is not default, so its a named export
import Teacher, {promote} from "./01-es6/teacher"; // because its default


function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

sayHello()

// objects

const person = {
    name: 'Mosh',
    walk: function () {
        console.log(this);
    },
    talk() {
    }
};

person.walk();
const walk = person.walk;
walk();
const walk2 = person.walk.bind(person);
walk2();
// person.talk();
// person['name'] = 'John';
//
// const targetMember = 'name';
// person[targetMember] = 'Mili';
// console.log(person.name);

// arrow functions
const square1 = function (number) {
    return number * number;
}

const square2 = number => number * number;

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 2, isActive: false},
];

const activeJobs1 = jobs.filter(function (job) {
    return job.isActive;
});
const activeJobs2 = jobs.filter(job => job.isActive);
console.log(activeJobs2);

const person2 = {
    name: 'Lili',
    talk() {
        let self = this;
        setTimeout(function () {
            console.log("self", self);
        }, 1000);
    }
};
person2.talk();


const person3 = {
    name: 'James',
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
};
person3.talk();

const colors = ['red', 'green', 'blue'];
const item1 = colors.map(color => '<li>' + color + '</li>');
const item2 = colors.map(color => `<li>${color}</li>`); // template literal
console.log(item2)

const address = {
    street: '',
    city: '',
    country: ''
};

const street = address.street;
const city = address.city;
const country = address.country;

//instead deconstructing an object

const {street: st, city1, country1} = address;

// spread operator
const first = [1, 2, 3]
const second = [4, 5, 6]

const combine = first.concat(second);
const combine1 = [...first, 'a', ...second];
console.log(combine1);

// this works also with an object
const firstObject = {name: 'MOsh'};
const secondObject = {job: 'instructor'};

const clone = {...firstObject}

const combine2 = {...firstObject, ...secondObject, ...first, location: 'Austria'};
console.log(combine2);

const teacher = new Teacher("Bill", 56, "PhD")
teacher.teach();
promote();
// modules

