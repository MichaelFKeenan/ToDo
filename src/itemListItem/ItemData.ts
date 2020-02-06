export class ItemData {
  public Name!: string;
  public Complete!: boolean;
  constructor(name: string, complete: boolean) {
    this.Name = name;
    this.Complete = complete;
  }
}
