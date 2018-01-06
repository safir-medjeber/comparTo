import {Item} from "./Item";

export class Question {
  private typeQuestion: TypeQuestion;
  private question: string;
  private proposition1: Item;
  private proposition2: Item;


  constructor(typeQuestion: TypeQuestion, question: string, proposition1: Item, proposition2: Item) {
    this.typeQuestion = typeQuestion;
    this.question = question;
    this.proposition1 = proposition1;
    this.proposition2 = proposition2;
  }


  public getTypeQuestion(): TypeQuestion {
    return this.typeQuestion;
  }

  public setTypeQuestion(value: TypeQuestion) {
    this.typeQuestion = value;
  }

 public getQuestion(): string {
    return this.question;
  }

  public setQuestion(value: string) {
    this.question = value;
  }

  public getProposition1(): Item {
    return this.proposition1;
  }

  public setProposition1(value: Item) {
    this.proposition1 = value;
  }

  public getProposition2(): Item {
    return this.proposition2;
  }

  public setProposition2(value: Item) {
    this.proposition2 = value;
  }
}

export enum TypeQuestion {
  PLUS = 0,
  MOINS = 1
}
