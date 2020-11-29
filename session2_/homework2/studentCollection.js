import { Student } from "./student.js";
export class StudentCollection {
  listStudent;
  constructor() {
    this.listStudent = [];
  }

  addStudent(student) {
    if (student instanceof Student) {
      this.listStudent.push(student);
    } else {
      alert("Học sinh không thuộc trường này");
    }
    // console.log(this);
  }

  // show15yearsOld() {
  //   // console.log(this.listStudent);
  //   console.log('===========================');
  //   console.log('Danh sách học sinh có số tuổi là 15:');
  //   for (let i = 0; i < this.listStudent.length; i++) {
  //     if (this.listStudent[i].age === 15) {
  //       console.log(`- ${this.listStudent[i].name}`);
  //     }
  //   }
  // }

  getStudentByAge(age) {
    return this.listStudent.filter((item) => {
      return item.age === age;
    });
  }

  // show18fromHanoi() {
  //   console.log('===========================');
  //   console.log('Danh sách học sinh có số tuổi là 18 và quê ở Hà Nội:');
  //   for (let i = 0; i < this.listStudent.length; i++) {
  //     if (this.listStudent[i].age === 18 && this.listStudent[i].hometown == 'Hanoi') {
  //       console.log(`- ${this.listStudent[i].name}`);
  //     }
  //   }
  // }

  getStudentByAgeHomeTown(age, hometown) {
    return this.listStudent.filter(
      (item) => item.age === age && item.hometown === this.hometown
    );
  }

  getStudentsByName(name) {
    return this.listStudent.filter((item) => item.name.includes(name));
  }
}
