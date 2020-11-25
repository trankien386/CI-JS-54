class Student {
  name;
  age;
  hometown;
  course;
  listStudent;
  constructor(name, age, hometown, course) {
    this.listStudent = [];
    this.name = name;
    this.age = age;
    this.hometown = hometown;
    this.course = course;
  }
  showInfo() {
    console.log('===========================');
    console.log('Danh sách học sinh:');
    for (let i = 0; i < this.listStudent.length; i++) {
      console.log(`
        Tên: ${this.listStudent[i].name}.
        Tuổi: ${this.listStudent[i].age}.
        Quê quán: ${this.listStudent[i].hometown}.
        Lớp: ${this.listStudent[i].course}.
      `)
    }
  }
  addStudent(student) {
    this.listStudent.push(student);
  }
  show15yearsOld() {
    // console.log(this.listStudent);
    console.log('===========================');
    console.log('Danh sách học sinh có số tuổi là 15:');
    for (let i = 0; i < this.listStudent.length; i++) {
      if (this.listStudent[i].age === 15) {
        console.log(`- ${this.listStudent[i].name}`);
      }
    }
  }
  show18fromHanoi() {
    console.log('===========================');
    console.log('Danh sách học sinh có số tuổi là 18 và quê ở Hà Nội:');

  }
}

const student1 = new Student('Kien', 18, 'Hanoi', '12D1');
const student2 = new Student('Leq', 15, 'Astofia', '9A');
const student3 = new Student('Enki', 15, 'Goxul', '9A');
const student4 = new Student('Mewlos', 18, 'Hanoi', '10D1');

const studentInfo = new Student();
studentInfo.addStudent(student1);
studentInfo.addStudent(student2);
studentInfo.addStudent(student3);
studentInfo.addStudent(student4);

studentInfo.showInfo();
studentInfo.show15yearsOld();
studentInfo.show18fromHanoi();


