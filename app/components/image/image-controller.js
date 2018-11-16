//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js";

let imageService = new ImageService()


function draw(image) {
  let template = ""
  template += `
    <style>
        body {background-image: url("${image.url}");
        background-size: cover;}
    </style>
    `
  document.getElementById('body').innerHTML = template
}

export default class ImageController {
  constructor() {
    this.getImage()
  }
  getImage() {
    imageService.getImage(draw)
  }

}

