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
  private thematicSelected: string;

  private proposition1: Item;
  private proposition2: Item;
  private score: number = 0;


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



  public playerResponse(playerAnswer: Item, idPositionAnswer: number){
    console.log(playerAnswer);
    if(this.gameRulesService.isTheGoodAnswer(playerAnswer, this.proposition1, this.proposition2)){
      this.updateView(this.gameRulesService.getNextQuestion(this.itemsByThematic, playerAnswer, idPositionAnswer),this.gameRulesService.updateScore(this.score));
    }
    else{
      this.goToGameEndPage();
    }
  }


  private updateView(question: Question, score: number): void{
    this.proposition1 = question.getProposition1();
    this.proposition2 = question.getProposition2();
    this.score = score;
  }


}
