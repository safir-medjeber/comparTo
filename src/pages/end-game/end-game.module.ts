import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {EndGamePage} from "./end-game";

@NgModule({
  declarations: [
    EndGamePage
  ],
  imports: [
    IonicPageModule.forChild(EndGamePage)
  ],
  entryComponents: [
    EndGamePage
  ]
})
export class GameModule {}
