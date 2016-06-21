const Person = function(name, age, gender) {
  return {
    name: name,
    age: age,
    gender: gender,
    sayName: function() {
      console.log(this.name);
    }
  };
}

const animal = {
  species: 'dog',
  age: 2
};

animal.legs = 3;

const bob = Person ('Bob', 95, 'other');

const Female = function(name, age) {
  const female = Person(name, age, 'female');
  female.wearMakeup = () => {
    console.log('I feel pretty');
  };
  return female;
};

const jenny = Female('jenny', 130);
