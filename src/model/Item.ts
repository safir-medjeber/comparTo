export class Item {
  name: string;
  url: string;
  value: number;
  thematic: string;
  unit: string;


  constructor(name: string, url: string, value: number, thematic: string, unit: string) {
    this.name = name;
    this.url = url;
    this.value = value;
    this.thematic = thematic;
    this.unit = unit;
  }
}
