const object = {
  name: 'Bob',
  age: 95,
  gender: 'other'
};

const rabbit = {
  run: () => {
    console.log('I\'m running');
  },
  eat: function() {
    console.log(this.food.favorite);
  },
  family: ['peter', 'mother', 'baby'],
  food: {
    favorite: 'carrots',
    poison: 'rabbit poison',
    winter: {
      stock: 30,
      type: 'grain'
    }
  }
};

let array = [];

for (i in object) {
  array.push(object[i])
  console.log(object[i]);
}
console.log(array);
