import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Item} from "../../model/Item";


@IonicPage()
@Component({
  selector: 'game-end-page',
  templateUrl: 'game-end.html'
})

export class GameEndPage implements OnInit{

  private score: number;
  private record: number;
  private itemsByThematic: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.score = this.navParams.get('scoreParam');
    this.itemsByThematic = this.navParams.get('thematicParam');
  }

  ngOnInit(): void {
    this.determineRecord();
  }

  private determineRecord(): void {
    this.storage.get('record').then((previousRecord) => {
      if (previousRecord != null) {
        if (previousRecord < this.score) {
          this.setNewRecord();
        }
        else {
          this.record = previousRecord;
        }
      }
      else{
        this.setNewRecord();
      }
    });
  }

  private setNewRecord(): void {
    this.storage.set('record', this.score).then(() => {
      this.record = this.score;
      console.log('Your record is', this.record);
    });
  }


  private resetRecord(): void {
    this.storage.clear().then(() => {
      this.navCtrl.push('GamePage', {thematicParam: this.itemsByThematic});
    });
  }

  public goToGamePage():void {
   this.navCtrl.push('GamePage', {thematicParam: this.itemsByThematic});
   // this.resetRecord();
  }

}
