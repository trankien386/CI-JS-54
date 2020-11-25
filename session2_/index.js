class person {
	name;
	age;
	address;
  gender;
  // đc gọi khi khai báo 1 đối tượng mới
  constructor(name, age, address, gender) {
    // console.log('this is a new person');
    this.name = name;
    this.age = age;
    this.address = address;
    this.gender = gender;
    // console.log(this);
  }
  speak() {
    console.log(`Kneel, before your ${this.name}`);
  }
  introduce() {
    console.log(`Hello, My name is ${this.name}.
    I'm 19
    And i'm from Hanoi.
    `);
  }
}

const god = new person('God', 9, 'Everywhere', 'Male');
// const fish = new person('Fish', 12, 'Pacific ocean', 'Female');
// god.speak();

const me = new person('Kien', 19, 'Hanoi', 'Male');
// me.introduce();

/* Class Animal
name, species, color, numberOfLeg, gender
eat         -> con + name + dang an
speak       -> con + name + dang keu
isDangerous -> so chan > 4 hoac so chan = 0
  => in ra co nguy hiem hay khong
*/
class Animal {
  name;
  species;
  color;
  numberOfLeg;
  gender;
  constructor(name, species, color, numberOfLeg, gender) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.numberOfLeg = numberOfLeg;
    this.gender = gender;
  }
  eat() {
    console.log(`Con ${name} đang ăn`);
  }
  speak() {
    console.log(`Con ${name} đang kêu`);
  }
  isDangerous() {
    // if (this.numberOfLeg > 4 || this.numberOfLeg === 0) {
    //   console.log('Động vật nguy hiểm');
    // } else {
    //   console.log('Động vật không nguy hiểm');
    // }
    // cach 2
    const message = (this.numberOfLeg > 4 || this.numberOfLeg === 0) ? 'Nguy HIem day' : 'Khong nguy hiem';
    console.log(message);
  }
}

const Lion = new Animal('Asiatic Lion', 'Panthera leo', 'yellow', 4, 'Male');
// console.log(Lion);
// Lion.isDangerous();

class myMath {
  static sum(a, b) {
    return a + b;
  }
  static div(a, b) {
    return a / b;
  }
}

// console.log(myMath.sum(2, 3));
// console.log(Math.ceil(2.435));

// kế thừa
class Employee extends person {
  salary;
  constructor(name, age, address, gender, salary) {
    super(name, age, address, gender);
    this.salary = salary;
  }
  meme() {
    console.log('Make America great again');
  }
  showOff() {
    return 'My salary is ' + this.salary;
  }
}

const myEmployee = new Employee('Angel', 8, 'Everywhere', 'Male', '1$');
// myEmployee.meme();
// nếu thêm console.log thì showOff() nên dùng return thay vì console.log
// console.log(myEmployee.showOff());

/* kế thừa
tạo class dog kế thừa animal, khi speak() in ra gâu gâu */
class dog extends Animal {
  constructor(name, species, color, numberOfLeg, gender) {
    super(name, species, color, numberOfLeg, gender);
  }
  speak() {
    console.log(`${this.name} nói rằng: 'gâu gâu'`);
  }
}

const myDog = new dog('Bull', 'Dog', 'Red Brindle', 4, 'Male');
// myDog.speak();
