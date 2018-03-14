import {Component, ViewChild} from '@angular/core';
import {Events, NavController} from 'ionic-angular';
import {GameService} from "../../services/game.service";
import {Storage} from '@ionic/storage';
import {getTheme, Theme, themes} from "../../model/Theme";
import {animations} from "./game-start.animation";

@Component({
  selector: 'page-game-start',
  templateUrl: 'game-start.html',
  animations: animations
})
export class GameStartPage {
  @ViewChild("e") e;
  click = false;
  state: string = '';

  chunkedTheme: any[];
  themes = themes;
  getTheme = getTheme;
  score: {[key in Theme]: Promise<number>}

  constructor(public navCtrl: NavController, private gameService: GameService, storage: Storage, events: Events) {
    let R = [];
    for (let i = 0, len = themes.length; i < len; i += 2)
      R.push(themes.slice(i, i + 2));
    this.chunkedTheme = R;

    const reloadScore = () => this.score = {
      'country': storage.get('recordcountry'),
      'building': storage.get('recordbuilding'),
      'food': storage.get('recordfood'),
      'car': storage.get('recordcar'),
      'stadium': storage.get('recordstadium')
    }
    events.subscribe('reloadScores', reloadScore);
    reloadScore();
  }

  goToGamePage(button: HTMLElement, label: Theme) {
    let bounds = button.getBoundingClientRect();
    let style = this.e.nativeElement.style;
    style.top = bounds.top + "px";
    style.left = bounds.left + "px";
    style.width = bounds.width + "px";
    style.height = bounds.height + "px";
    this.e.nativeElement.innerHTML = button.outerHTML
    this.e.nativeElement.className = "btn-growth " + label
    this.click = true;


    let timer = new Promise((resolve, reject) => {
      setTimeout(resolve, 2000, 'promise 1 resolved');
    });
    let gameLoading = this.gameService.setTheme(label)
    Promise.all([timer, gameLoading]).then(_ => {
        this.navCtrl.push('GamePage', {})
        setTimeout(() => {
          this.e.nativeElement.innerHTML = ""
          this.click = false
        }, 5000)
      }
    )
  }
}
