import { getDataFromDocs } from "../components/utils.js";

class listPost extends HTMLElement {
  constructor() {
    super();
    this.sdRoot = this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const res = await firebase
      .firestore()
      .collection("posts")
      .where("isShow", "==", true)
      .get();
    this.listenCollectionChange();
    const listPost = getDataFromDocs(res);
    let html = "";

    listPost.forEach((element) => {
      html += `
        <post-item
          time='${element.createdAt}'
          author='${element.authorName}'
          content='${element.content}'
        ></post-item>
      `;
    });
    // console.log(listPost);

    this.sdRoot.innerHTML = `
    <style>${style}</style>
    <div class='list-posts'>
      ${html}
    </div>
    `;
  }

  listenCollectionChange() {
    let firstRun = true;
    firebase
      .firestore()
      .collection("posts")
      .where("isShow", "==", true)
      .onSnapshot((snapShot) => {
        // Phuc vu cho lan chay thu 2
        if (firstRun) {
          firstRun = false;
          return;
        }
        console.log("snapshot ", snapShot.docChanges());
      });
  }
}

const style = `
  .list-posts {
    width: 80%;
    margin: auto;
  }
`;

customElements.define("list-post", listPost);
