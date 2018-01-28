import {EventEmitter} from '@angular/core';
import {Item} from "../model/Item";
import {Question, WhoIsHigher} from "../model/Question";
import {Theme} from "../model/Theme";

export class GameRulesService {
  private state: GameState;
  private timeout: number;
  private score: number;

  private question: Question;
  private nextQuestion: Question;

  readonly timer: number = 8000;
  readonly emitter: EventEmitter<GameState>;

  constructor(public readonly theme: Theme, private items: Item[]) {
    this.emitter = new EventEmitter();
    this.nextQuestion = this.pick();
  }

  start() {
    this.score = 0;
    this.setState(GameState.CanQuestion);
  }

  public getQuestion(): Question {
    if(this.state == GameState.CanQuestion) {
      this.timeout = this.setTimer();
      this.question = this.nextQuestion;
      this.nextQuestion = this.pick();
      return this.question;
    }
  }

  private pick(): Question {
    let {itemA, itemB} = this.chooseNewCandidates(this.items);
    this.setState(GameState.Questioning);
    // preload images
    new Image().src = itemA.url;
    new Image().src = itemB.url;
    return new WhoIsHigher(itemA, itemB);
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
    if (this.state == GameState.Questioning) {
      clearTimeout(this.timeout);
      if (correct) {
        this.score += 1;
        this.setState(GameState.CanQuestion);
      }
      else {
        this.setState(GameState.GameOver);
      }
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
