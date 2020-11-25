class User {
  name;
  age;
  gender;
  description;
  image;
  constructor(name, age, gender, description, image) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.description = description;
    this.image = image;
  }

  like() {}
  unlike() {}
  update(name, age, gender, description, image) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.description = description;
    this.image = image;
  }

  toHTML() {
    return `
      <div class='user-container'>
        <div class='previous'><</div>
        <img src='${this.image}'/>
        <div class='info'>
          ${this.name}
          ${this.age}
          ${this.description}
        </div>
        <div class='next'>></div>
      </div>
    `;
  }
}

class UserCollection {
  listUser;
  current;
  constructor() {
    this.listUser = [];
    this.current = 0;
  }

  addUser(user) {
    this.listUser.push(user);
  }

  removeUser(index) {
    this.listUser.splice(index, 1);
  }

  show() {
    document.querySelector("#app").innerHTML = this.listUser[this.current].toHTML();
    this.listenUserClick();
  }

  previous() {
    console.log(this.current);
    if (this.current > 0) {
      this.current--;
      this.show();
    }
  }

  next() {
    console.log(this.current);
    if (this.current < this.listUser.length - 1) {
      this.current++;
      this.show();
    }
  }

  listenUserClick() {
    document.querySelector(".previous").addEventListener("click", () => {
      collection.previous();
    });
    document.querySelector(".next").addEventListener("click", () => {
      collection.next();
    });
  }
}

const collection = new UserCollection();
const user1 = new User(
  "God",
  9,
  "Male",
  "Don't question my existence",
  "https://acutonics.com/uploads/images/Nibiru-January-Symbol.jpg"
);
const user2 = new User(
  "Enki",
  8,
  "Male",
  "GG",
  "https://www.ancient.eu/img/r/p/500x600/5851.jpg?v=1485682577"
);
collection.addUser(user1);
collection.addUser(user2);
collection.show();


