class Student {
  name;
  age;
  hometown;
  class;
  constructor(name, age, hometown, class) {
    this.name = name;
    this.age = age;
    this.hometown = hometown;
    this.class = class;
  }
  showInfo() {
    console.log(`
      Tên: ${this.name}.
      Tuổi: ${this.age}.
      Quê quán: ${this.hometown}.
      Lớp: ${this.class}.
    `)
  }
}
