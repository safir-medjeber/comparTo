import {EventEmitter, Injectable} from '@angular/core';
import {Item} from "../model/Item";
import {Question, WhoIsHigher} from "../model/Question";

@Injectable()
export class GameRulesService {
  private state: GameState;
  private timeout: number;
  private score: number;

  private question: Question;

  readonly timer: number = 5000;
  readonly emitter: EventEmitter<GameState>;

  constructor() {
    this.emitter = new EventEmitter();
  }

  start() {
    this.setState(GameState.CanQuestion);
  }

  public getQuestion(itemsByThematic: Item[]): Question {
    if(this.state == GameState.CanQuestion) {
      let {itemA, itemB} = this.chooseNewCandidates(itemsByThematic);
      this.setState(GameState.Questioning);
      this.question = new WhoIsHigher(itemA, itemB);
      this.timeout = this.setTimer();

      return this.question;
    }
  }

  private chooseNewCandidates(items: Item[]) {
    const i = this.getRandomInt(0, items.length - 1);
    const j = this.getRandomInt(1, items.length - 1);
    [items[0], items[i]] = [items[i], items[0]];
    [items[1], items[j]] = [items[j], items[1]];
    return {itemA: items[0], itemB: items[1]};
  }

  public replyA() { this.playerAnswer(this.question.replyA()) }
  public replyB() { this.playerAnswer(this.question.replyB()) }

  private playerAnswer(correct: boolean) {
    clearTimeout(this.timeout);
    if (this.state == GameState.Questioning && correct) {
      this.score += 1;
      this.setState(GameState.CanQuestion);
    }
    else {
      this.setState(GameState.GameOver);
    }
  }

  private getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private setState(state: GameState) {
    this.state = state;
    this.emitter.emit(this.state);
  }

  private setTimer() {
    return setTimeout(() => {
      if (this.state == GameState.Questioning)
        this.setState(GameState.GameOver)
    }, this.timer);
  }

  getScore() {
    return this.score;
  }
}

export enum GameState {
  CanQuestion,
  Questioning,
  GameOver
}
