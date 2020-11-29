export class Student {
  name;
  age;
  hometown;
  course;
  // listStudent;
  constructor(name, age, hometown, course) {
    // this.listStudent = [];
    this.name = name;
    this.age = age;
    this.hometown = hometown;
    this.course = course;
  }

  showInfo() {
    // console.log('===========================');
    // console.log('Danh sách học sinh:');
    // for (let i = 0; i < this.listStudent.length; i++) {
    console.log(`
        Tên: ${this.name}.
        Tuổi: ${this.age}.
        Quê quán: ${this.hometown}.
        Lớp: ${this.course}.
      `);
    // }
  }
}
