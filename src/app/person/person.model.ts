export class PersonModel {
  constructor(public id: number, public name: string) {}

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}
