import {Component} from '@angular/core';
import {Platform, App} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GameStartPage} from "../pages/game-start/game-start";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = GameStartPage;

  constructor(app: App, platform: Platform, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        let nav = app.getActiveNav();
        let activeView = nav.getActive();

        if (typeof activeView.instance.backButtonAction === 'function') {
          activeView.instance.backButtonAction()
        }
      })
    })
  }
}

