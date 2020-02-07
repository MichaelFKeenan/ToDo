export class ItemData {
  public Name!: string;
  public Complete!: boolean;
  public Priority!: number;
  constructor(name: string, complete: boolean, priority: number) {
    this.Name = name;
    this.Complete = complete;
    this.Priority = priority;
  }
}
