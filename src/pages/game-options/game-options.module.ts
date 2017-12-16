import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {GameOptionsPage} from "./game-options";

@NgModule({
  declarations: [
    GameOptionsPage
  ],
  imports: [
    IonicPageModule.forChild(GameOptionsPage)
  ],
  entryComponents: [
    GameOptionsPage
  ]
})
export class GameOptionsModule {}
