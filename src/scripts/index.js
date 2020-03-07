import "../styles/index.scss";
import "./events";
const a = 5;
const b = 10;
const sum = a + b;
const min = a - b;
const div = a / b;
const mult = a * b;

console.log(sum);
console.log(min);
console.log(div);
console.log(mult);

const user = {
  name: "Victoria",
  surname: "Furman",
  age: 21,
  dateOfBirth: "26th of December",
  height: 160,
  havePets: true,
  favFood: ["coffee", "buckwheat", "meat", "avocado"],
  logNameAndDateOfBirth: function() {
    console.log(
      "Info about the user",
      this.name + " " + this.surname + " " + this.dateOfBirth
    );
  }
};

console.log(user.name);
console.log(user.surname);
console.log(user.age);
console.log(user.dateOfBirth);
console.log(user.height);
console.log(user.havePets);
console.log(user.favFood);

user.logNameAndDateOfBirth();
