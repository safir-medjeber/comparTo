import { Injectable } from '@angular/core';
import {Item} from "../model/Item";
import {Question, TypeQuestion} from "../model/Question";


const POSITION_1 = 1;
const POSITION_2 = 2;

@Injectable()
export class GameRulesService{

  private numberQuestion: number;
  private currentTypeQuestion: TypeQuestion = TypeQuestion.THE_MOST;

  constructor() {
  }

  public getFirstQuestion(itemsByThematic: Item[]): Question{
    this.numberQuestion = 0;
    let proposition1: Item = this.chooseNewCandidate(undefined, itemsByThematic);
    let proposition2: Item = this.chooseNewCandidate(proposition1, itemsByThematic);
    return new Question(this.determineTypeQuestion(), this.determineLabelQuestion(), proposition1, proposition2);
  }


  public getNextQuestion(itemsByThematic:Item[], playerAnswer: Item, idPositionAnswer: number): Question{
    let proposition1: Item = (idPositionAnswer == POSITION_1) ? playerAnswer : this.chooseNewCandidate(playerAnswer, itemsByThematic) ;
    let proposition2: Item = (idPositionAnswer == POSITION_2) ? playerAnswer : this.chooseNewCandidate(playerAnswer, itemsByThematic) ;
    return new Question(this.determineTypeQuestion(), this.determineLabelQuestion(), proposition1, proposition2);
  }


  public isTheGoodAnswer(playerAnswer: Item, question: Question): boolean{
    return question.answer == playerAnswer.value;
  }


  public updateScore(score: number): number{
    return score +1 ;
  }

  private determineLabelQuestion(): string {
    return (this.currentTypeQuestion === TypeQuestion.THE_MOST) ?
      "Quel est le pays le PLUS peuplé ?" : "Quel est le pays le MOINS Peuplé ?";
  }

  private determineTypeQuestion(): TypeQuestion{
    this.numberQuestion= this.numberQuestion+1;
    this.currentTypeQuestion = (this.numberQuestion % 5 == 0) ? this.changeTypeQuestion() : this.currentTypeQuestion;
    return this.currentTypeQuestion;
  }

  private changeTypeQuestion(): TypeQuestion{
    return (this.currentTypeQuestion==TypeQuestion.THE_MOST) ? TypeQuestion.THE_LEAST : TypeQuestion.THE_MOST;
  }

  private chooseNewCandidate(previousCandidate: Item, itemsByThematic: Item[]):Item {
    let indexCandidate: number = this.getRandomInt(0, itemsByThematic.length-1);
    if(previousCandidate){
      while( this.isTheSameCandidate(previousCandidate, itemsByThematic[indexCandidate])){
        indexCandidate = this.getRandomInt(0, itemsByThematic.length);
      }
    }
    return itemsByThematic[indexCandidate];
  }


  private isTheSameCandidate(propositione1:Item, propositione2: Item): boolean{
    return propositione1.name === propositione2.name;
  }

  private  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




}
