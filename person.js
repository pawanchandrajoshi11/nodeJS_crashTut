// const person = {
//   name: "Vimsha",
//   age: 22,
// };

// module.exports = person;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hey, my name is ${this.name} and I'm ${this.age}.`);
  }
}

module.exports = Person;
