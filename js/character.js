class Person {
  constructor(name, sect, skill) {
    this.name = name;
    this.sect = sect;
    this.skill = skill;
  }
  saySkill () {
    console.log(`I'm amazing at ${this.skill}`);
  }
}

class Witcher extends Person {
  constructor(name, skill){
    super(name, 'witcher', skill);
  }
  technique() {
    console.log('I fight by the school of the wolf');
  }
  wittySaying() {
    console.log('Whatever');
  }
}

class Sorceress extends Person {
  constructor(name, skill) {
    super(name, 'sorceress', skill);
  }
}

class Baron extends Person {
  constructor(name, skill) {
    super(name, 'baron', skill);
  }
}

const geralt = new Witcher('geralt', 'igni')

const jennifer = new Sorceress('jennifer', 'magic')

const philip = new Baron('bloody baron', 'drinking')

const vesemir = new Witcher('vesemir', 'sleeping')

const keira = new Sorceress('keira', 'seduction')
