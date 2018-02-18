import {Component, OnInit, ViewChild} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {GameService} from "../../services/game.service";
import {getTheme, Theme, ThemeProps, themes} from "../../model/Theme";
import {animations} from "../game-end/game-end.animation";


@IonicPage()
@Component({
  selector: 'page-game-end',
  templateUrl: 'game-end.html',
  animations: animations

})

export class GameEndPage {
  // score: number;
  // record: number;
  // themeRecord: number;
  // private theme: Theme;
  //
  //
  // constructor(
  //   private gameService: GameService,
  //   private navCtrl: NavController,
  //   private navParams: NavParams,
  //   private storage: Storage,
  //   private events:Events,
  // ) {
  //   this.theme = this.gameService.getTheme();
  //   this.score = this.navParams.get('scoreParam') || 0;
  // }
  //
  // ngOnInit(): void {
  //   this.determineRecord();
  // }
  //
  // private determineRecord(): void {
  //   Promise.all([
  //     this.storage.get('record'),
  //     this.storage.get('record' + this.theme)
  //   ]).then(([record, themeRecord]) => {
  //     this.record = Math.max(record || 0, this.score)
  //     this.themeRecord = Math.max(themeRecord || 0, this.score)
  //     this.setRecord();
  //   });
  // }
  //
  // private setRecord(): void {
  //   this.storage.set('record', this.record),
  //   this.storage.set('record' + this.theme, this.themeRecord)
  // }
  //
  // public goToGamePage():void {
  //   this.navCtrl.push('GamePage')
  // }
  //
  // goToGameStartPage(){
  //   this.events.publish('reloadScores');
  //   this.navCtrl.popToRoot();
  // }



  score: number;
  record: number;
  themeRecord: number;
  private theme: Theme;



  chunkedTheme: any[];
  panelTheme = ['country', 'globalRecord', 'localRecord', 'currentScore', 'replay', 'mainMenu'];

  getTheme = getTheme;

  constructor(public navCtrl: NavController, private navParams: NavParams, private gameService: GameService, storage: Storage, events: Events,) {
    let R = [];
    for (let i = 0, len = this.panelTheme.length; i < len; i += 2)
      R.push(this.panelTheme.slice(i, i + 2));
    this.chunkedTheme = R;
    this.score = this.navParams.get('scoreParam') || 0;
  }


  goToGamePage(button: HTMLElement, label: Theme) {

    this.navCtrl.push('GamePage', {});

  }
}
