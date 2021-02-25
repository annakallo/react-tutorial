import {CoolPerson} from "./person";

export function promote() {
    console.log('promote')
}

export default class Teacher extends CoolPerson {
    constructor(name, age, degree) {
        super(name, age);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}

