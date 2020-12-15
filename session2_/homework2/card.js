export class cardComponent extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.img = this.getAttribute("img");
    this.name = this.getAttribute("name");
    this.age = this.getAttribute("age");
    this.hometown = this.getAttribute("hometown");
    this.course = this.getAttribute("course");
    this.shadowDOM.innerHTML = `
      ${style}
      <div class='card' style="max-width: 18rem;">
        <img class='card-img-top' src='${this.img}'>
        <div class='card-body'>
          <div class='card-title'><span>Tên: </span><span>${this.name}</span></div>
          <div class='card-title'><span>Tuổi: </span><span>${this.age}</span></div>
          <div class='card-title'><span>Quê quán: </span><span>${this.hometown}</span></div>
          <div class='card-title'><span>Lớp: </span><span>${this.course}</span></div>
        </div>
      </div>
    `;
  }

  // duoc goi khi component duoc show ra man hinh
  // connectedCallback() {
  //   console.log('element ' + this.name + ' dc sinh ra');
  // }

  // duoc goi khi component bi xoa di
  // disconnectedCallback() {
  //   console.log('element ' + this.name + ' bi xoa di');
  // }

  // Lang nghe thay doi nhữq attribute nao
  // static get observeredAttribute() {
  //   return ['name'];
  // }

  // duoc goi khi co su thay doi attribute
  // attributeChangedCallback(name, oldValue, newVal) {
  //   console.log('newVal', newVal);
  //   console.log('oldVal', oldValue);
  //   console.log('attribute', name);
  // }
}

customElements.define("card-component", cardComponent);

const style = `
  <style>
    img {
      max-width: 100%;
      margin: 10px 0 0 0;
    }

    .card {
      border: 1px solid #dbdbdb;
      border-radius: 8px;
      margin: 20px 0 0 0;
      display:inline-block;
    }

    .card-body {
      padding: 10px 20px;
    }

    span:nth-child(1) {
      font-weight: 600;
    }
    
    span:nth-child(2) {
      float: right;
    }
  </style>
`;


