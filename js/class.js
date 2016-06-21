const Person = function(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.sayName = () => {
    console.log(`My name is ${this.name}`);
  };
}

const bob = new Person('Slim Shady', 95, 'other');

const Male = function(name, age, shirt, pants) {
  Person.call(this, name, age, 'male');
  this.pants = pants;
  this.shirt = shirt;
  this.sayName = () => {
    console.log('I\'m a real boy');
  };
}

Male.prototype = Object.create(Person.prototype);

Person.prototype.shaveFace = function () {
  console.log('May face is like a baby\'s bottom');
};

const jimmy = new Male('Jimothy', 43);

// console.log('Hi');
