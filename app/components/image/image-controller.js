//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js";

let imageService = new ImageService()


function draw(image) {
  document.getElementById('body').style.backgroundImage = `url('${image.url}')`
}

export default class ImageController {
  constructor() {
    this.getImage()
  }
  getImage() {
    imageService.getImage(draw)
  }

}

