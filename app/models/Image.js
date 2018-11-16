export default class image {
  constructor(data) {
    this.url = data.url
  }
  get imageUrl() {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${this.url}" />
          </div>
    `
  }
}