import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Item} from "../../model/Item";
import {MOCK_ITEMS} from "../../services/mock-items";


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage implements OnInit {

  private itemsByThematic: Item[];
  candidate1: Item;

  private candidate2: Item;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.itemsByThematic = this.navParams.get('thematicParam');
    this.itemsByThematic = MOCK_ITEMS;
  }

  ngOnInit(){
    this.firstQuestion();
  }


  goToGameOptionsPage(){
    this.navCtrl.push('GameOptionsPage');
  }


  private  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  private chooseNewCandidate(previousCandidate: Item):Item {
    let indexCandidate: number = this.getRandomInt(0, this.itemsByThematic.length-1);
    if(previousCandidate){
      while( this.isTheSameCandidate(previousCandidate, this.itemsByThematic[indexCandidate])){
        indexCandidate = this.getRandomInt(0, this.itemsByThematic.length);
      }
    }
    return this.itemsByThematic[indexCandidate];
  }

  private isTheSameCandidate(candidate1:Item, candidate2: Item): boolean{
    return candidate1.name === candidate2.name;
  }


  private firstQuestion(){
    this.candidate1 = this.chooseNewCandidate(undefined);
    this.candidate2 = this.chooseNewCandidate(this.candidate1);
  }

  private nextQuestion(){
    this.candidate1 = this.chooseNewCandidate(undefined);
    this.candidate2 = this.chooseNewCandidate(this.candidate1);
  }



  private determineResponse(): number {
    if(this.candidate1.value > this.candidate2.value) {
      return this.candidate1.value;
    }
    else{
      return this.candidate2.value
    }
  }

  private isTheGoodResponse(responseValue: number): boolean{
    return this.determineResponse() == responseValue;
  }


  public playerResponse(responseValue: number){
    console.log(responseValue);
   if(this.isTheGoodResponse(responseValue)){
     console.log("GOOD");
     this.nextQuestion();
   }
   else{
     console.log("BAD");
   }
  }



}
