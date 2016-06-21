class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
    return 1;
  }
}

const bob = new Person('bob', 95, 'other');

class Female extends Person {
  constructor(name, age, gender = 'female') {
    super(name, age, gender);
  }

  sayName() {
    console.log(`I am ${this.name}, hear me roar`)
  }

  walkInHighHeels() {
    console.log('MY FEEEEEEEEEEEEEEET!!!!!!!');
  }
}

const jenny = new Female('jenny', 12, 'female');
