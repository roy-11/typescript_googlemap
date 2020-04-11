import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  avator: string;
  icon: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.avator = faker.image.avatar();
    this.icon = "user";
  }

  markerContent(): string {
    return `
    <img src="${this.avator}" alt="avator">
    <h3>User Name : ${this.name}</h3>
    `;
  }
}
