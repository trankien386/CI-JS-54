import {getDataFromDoc} from './utils.js';
import {getDataFromDocs} from './utils.js';

getOneDocument();
getManyDocument();

// read one
async function getOneDocument() {
  // promise
  // const res = firebase.firestore().collection('users').doc('HW5wpIGtl03IB6sK6wNc').get()
  // .then((res) => {
  //   console.log(res);
  // })

  // aynsc await
  // const res = await firebase.firestore().collection('users').doc('HW5wpIGtl03IB6sK6wNc').get();
  // const user = res.data();
  // user.id = res.id;
  // console.log(user);
}

// get many documents
async function getManyDocument() {
  const res = await firebase.firestore().collection('users').get()
  const user = getDataFromDocs(res);
  console.log(res.docs[0].data());
}


