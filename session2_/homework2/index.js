// import { Student } from './student.js'
// import { StudentCollection } from './studentCollection.js'
import './card.js'
import {getDataFromDoc} from './utils.js'
import {getDataFromDocs} from './utils.js'

// const studentCollection = new StudentCollection();

// studentCollection.addStudent(new Student('Kien', 18, 'Hanoi', '12D1'));
// studentCollection.addStudent(new Student('Leq', 15, 'Astofia', '9A'));
// studentCollection.addStudent(new Student('Enki', 15, 'Goxul', '9A'));
// studentCollection.addStudent(new Student('Mewlos', 18, 'Hanoi', '10D1'));


// const student1 = new Student('Kien', 17, 'Hanoi', '12D1');
// const student2 = new Student('Leq', 14, 'Astofia', '9A');
// const student3 = new Student('Enki', 14, 'Goxul', '9A');
// const student4 = new Student('Mewlos', 15, 'Hanoi', '10D1');

// studentCollection.addStudent(student1);
// studentCollection.addStudent(student2);
// studentCollection.addStudent(student3);
// studentCollection.addStudent(student4);

// const studentInfo = new Student();

// studentInfo.addStudent(student1);
// studentInfo.addStudent(student2);
// studentInfo.addStudent(student3);
// studentInfo.addStudent(student4);

// studentCollection.addStudent(student1);

// studentInfo.showInfo();
// studentInfo.show15yearsOld();
// studentInfo.show18fromHanoi()

// console.log(studentCollection);

async function getOneDocument() {
  const res = await firebase.firestore().collection('students').doc('66Dx0zxh4GsjxcYOEWA7').get();
  const user = res.data();
  user.id = res.id;
  // console.log(user);
}

async function getManyDocument() {
  const res = await firebase.firestore().collection('students').get();
  const student = getDataFromDocs(res);
  // console.log(res.docs[0].data());
  // console.log(res);
  return student;
}

getOneDocument();
getManyDocument().then(res => {
  let html='';
  // console.log(res);
  for (const item of res) {
    html += `<card-component class='col-md' name='${item.name}'></card-component>`
  }
  document.querySelector('.row').innerHTML = html;
})

// document.querySelector('.row').innerHTML = `
//   <card-component class="col-md-3" name='${}' age='${}' hometown='${}' course='${}' img='https://img-new.cgtrader.com/items/1838623/f1191aa4b5/toy-rubber-duck-3d-model-obj-mtl-fbx-lwo-lw-lws-stl-dae-lxo-lxl.jpg'></card-component>
//   <card-component class="col-md-3" name='${}' age='${}' hometown='${}' course='${}' img='https://cdn11.bigcommerce.com/s-y01u13u/images/stencil/1280x1280/products/898/80237/apihm4lz3__91572.1594403284.jpg?c=2'></card-component>
//   <card-component class="col-md-3" name='${}' age='${}' hometown='${}' course='${}' img='https://img-new.cgtrader.com/items/1838623/f1191aa4b5/toy-rubber-duck-3d-model-obj-mtl-fbx-lwo-lw-lws-stl-dae-lxo-lxl.jpg'></card-component>
//   <card-component class="col-md-3" name='${}' age='${}' hometown='${}' course='${}' img='https://img-new.cgtrader.com/items/1838623/f1191aa4b5/toy-rubber-duck-3d-model-obj-mtl-fbx-lwo-lw-lws-stl-dae-lxo-lxl.jpg'></card-component>
// `

// add document
function addDocument() {
  const data = {
    name: 'leog',
    age: '16',
    hometown: 'Alsone',
    course: '10D1'
  }
  firebase.firestore().collection('students').add(data);
}

// addDocument();

// update document
function updateDocument() {
  const docId = 'T3ZW3wqU1Vi0pF7lrYAL'
  const data = {
    // name: 'leoGin',
    name: firebase.firestore.FieldValue.arrayUnion('leoGin'),
  }
  firebase.firestore().collection('students').doc(docId).update(data);
}

// updateDocument();

// delete document
function deleteDocument() {
  const docId='T3ZW3wqU1Vi0pF7lrYAL';

 firebase.firestore().collection('students').doc(docId).delete();
}

// deleteDocument();


