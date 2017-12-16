import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainMenuPage } from '../pages/main-menu/main-menu';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainMenuPage;

  constructor(platform: Platform, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();
    });
  }
}

