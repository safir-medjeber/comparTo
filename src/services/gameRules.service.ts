import { Injectable } from '@angular/core';
import {Item} from "../model/Item";
import {Question, TypeQuestion} from "../model/Question";


@Injectable()
export class GameRulesService{


  constructor() {
  }

  public getFirstQuestion(itemsByThematic: Item[]): Question{
    let proposition1: Item = this.chooseNewCandidate(undefined, itemsByThematic);
    let proposition2: Item = this.chooseNewCandidate(proposition1, itemsByThematic);
    return new Question(TypeQuestion.PLUS, "wording", proposition1, proposition2);
  }


  public getNextQuestion(itemsByThematic:Item[]): Question{
    let proposition1: Item = this.chooseNewCandidate(undefined, itemsByThematic);
    let proposition2: Item = this.chooseNewCandidate(proposition1, itemsByThematic);
    return new Question(TypeQuestion.PLUS, "wording", proposition1, proposition2);
  }


  public isTheGoodAnswer(playerAnswer: number, canditate1: Item, candidate2: Item): boolean{
    return this.determineAnswer(TypeQuestion.PLUS, canditate1, candidate2) == playerAnswer;
  }


  public updateScore(score: number): number{
    return score +1 ;
  }


  private determineAnswer(typeQuestion: TypeQuestion, candidate1: Item, candidate2: Item): number {
    return (typeQuestion === TypeQuestion.PLUS) ?
      Math.max(candidate1.value, candidate2.value) : Math.min(candidate1.value, candidate2.value);
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


  private isTheSameCandidate(candidate1:Item, candidate2: Item): boolean{
    return candidate1.name === candidate2.name;
  }

  private  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




}
