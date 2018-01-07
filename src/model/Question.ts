import {Item} from "./Item";

export class Question {

  public readonly typeQuestion: TypeQuestion;
  public readonly question: string;
  public readonly proposition1: Item;
  public readonly proposition2: Item;
  public readonly answer: number;


  constructor(typeQuestion: TypeQuestion, question: string, proposition1: Item, proposition2: Item) {
    this.typeQuestion = typeQuestion;
    this.question = question;
    this.proposition1 = proposition1;
    this.proposition2 = proposition2;
    this.answer = this.determineAnswer(typeQuestion, proposition1, proposition2);
  }

  private determineAnswer(typeQuestion: TypeQuestion, proposition1: Item, proposition2: Item): number {
    return (typeQuestion === TypeQuestion.THE_MOST) ?
      Math.max(proposition1.value, proposition2.value) : Math.min(proposition1.value, proposition2.value);
  }
}

export enum TypeQuestion {
  THE_MOST = 0,
  THE_LEAST = 1
}
