import { Student } from './student.js'
import { StudentCollection } from './studentCollection.js'
import './card.js'

const studentCollection = new StudentCollection();

// studentCollection.addStudent(new Student('Kien', 18, 'Hanoi', '12D1'));
// studentCollection.addStudent(new Student('Leq', 15, 'Astofia', '9A'));
// studentCollection.addStudent(new Student('Enki', 15, 'Goxul', '9A'));
// studentCollection.addStudent(new Student('Mewlos', 18, 'Hanoi', '10D1'));

// const studentInfo = new Student();

const student1 = new Student('Kien', 17, 'Hanoi', '12D1');
const student2 = new Student('Leq', 14, 'Astofia', '9A');
const student3 = new Student('Enki', 14, 'Goxul', '9A');
const student4 = new Student('Mewlos', 15, 'Hanoi', '10D1');

studentCollection.addStudent(student1);
studentCollection.addStudent(student2);
studentCollection.addStudent(student3);
studentCollection.addStudent(student4);

// studentInfo.addStudent(student1);
// studentInfo.addStudent(student2);
// studentInfo.addStudent(student3);
// studentInfo.addStudent(student4);

// studentCollection.addStudent(student1);
//
// studentInfo.showInfo();
// studentInfo.show15yearsOld();
// studentInfo.show18fromHanoi()

// console.log(studentCollection);

document.querySelector('.row').innerHTML = `
  <card-component class="col-md-3" name='${student1.name}' age='${student1.age}' hometown='${student1.hometown}' course='${student1.course}' img='https://img-new.cgtrader.com/items/1838623/f1191aa4b5/toy-rubber-duck-3d-model-obj-mtl-fbx-lwo-lw-lws-stl-dae-lxo-lxl.jpg'></card-component>
  <card-component class="col-md-3" name='${student2.name}' age='${student2.age}' hometown='${student2.hometown}' course='${student2.course}' img='https://cdn11.bigcommerce.com/s-y01u13u/images/stencil/1280x1280/products/898/80237/apihm4lz3__91572.1594403284.jpg?c=2'></card-component>
  <card-component class="col-md-3" name='${student3.name}' age='${student3.age}' hometown='${student3.hometown}' course='${student3.course}' img='https://img-new.cgtrader.com/items/1838623/f1191aa4b5/toy-rubber-duck-3d-model-obj-mtl-fbx-lwo-lw-lws-stl-dae-lxo-lxl.jpg'></card-component>
  <card-component class="col-md-3" name='${student4.name}' age='${student4.age}' hometown='${student4.hometown}' course='${student4.course}' img='https://img-new.cgtrader.com/items/1838623/f1191aa4b5/toy-rubber-duck-3d-model-obj-mtl-fbx-lwo-lw-lws-stl-dae-lxo-lxl.jpg'></card-component>
`


