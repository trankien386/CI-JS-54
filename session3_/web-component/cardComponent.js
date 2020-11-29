export class cardComponent extends HTMLElement {
  constructor() {
    super();
    // Khai bao shadowDOM
    this.shadowDOM = this.attachShadow({mode:'open'})
    this.imgSrc = this.getAttribute('imgsrc');
    this.title = this.getAttribute('title');
    this.desc = this.getAttribute('description');
    this.shadowDOM.innerHTML = `
      ${style}
      <div class="card">
        <img src="${this.imgSrc}">
        <div class="card-body">
          <div class='title'>${this.title}</div>
          <div class='description'>${this.desc}</div>
        </div>
      </div>
    `
  }
}

const style = `
  <style>
    .card {
      font-family: sans-serif;
      border: 1px solid #dbdbdb;
      margin-right: 20px;
      color: #363636
    }

    img {
      width: 100%;
    }

    .card-body {
      padding: 20px;
    }
    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }

  </style>
`

customElements.define('card-container', cardComponent);


