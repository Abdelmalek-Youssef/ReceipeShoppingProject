export class Receipe {
  public name: String;
  public description: String;
  public imageUrl: String;

  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.imageUrl = image;
  }
}
