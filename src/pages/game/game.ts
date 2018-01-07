import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Item} from "../../model/Item";
import {MOCK_ITEMS} from "../../services/mock-items";
import {Question} from "../../model/Question";
import {GameRulesService} from "../../services/gameRules.service";


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage implements OnInit {

  private itemsByThematic: Item[];
  private currentQuestion: Question;

  private score: number = 0;
  private handleTimeout: number ;


  constructor(public navCtrl: NavController, public navParams: NavParams, public gameRulesService: GameRulesService) {
    // this.itemsByThematic = this.navParams.get('thematicParam');
    this.itemsByThematic = MOCK_ITEMS;
  }

  ngOnInit() {
    this.updateView(this.gameRulesService.getFirstQuestion(this.itemsByThematic), 0);
  }

  goToGameOptionsPage(){
    this.navCtrl.push('GameOptionsPage',);
  }
  goToGameEndPage(){
    this.navCtrl.push('GameEndPage', {scoreParam: this.score, thematicParam: this.itemsByThematic});
  }

  public playerAnswer(playerAnswer: Item, idPositionAnswer: number){
    clearTimeout(this.handleTimeout);
    if(this.gameRulesService.isTheGoodAnswer(playerAnswer, this.currentQuestion)){
      this.updateView(this.gameRulesService.getNextQuestion(this.itemsByThematic, playerAnswer, idPositionAnswer), this.gameRulesService.updateScore(this.score));
      this.timer(5000);
    }
    else{
      this.goToGameEndPage();
    }
  }

  private timer(timeToAnswer: number): void {
    this.handleTimeout = setTimeout(() => {
      this.goToGameEndPage();
    }, timeToAnswer);
  }

  private updateView(question: Question, score: number): void{
    this.score = score;
    this.currentQuestion = question;
    console.log(this.currentQuestion.proposition1.value);
    console.log(this.currentQuestion.proposition2.value);
  }


  private debug(): void{
    console.log(this.currentQuestion.proposition1.value);
    console.log(this.currentQuestion.proposition2.value);
  }

}
