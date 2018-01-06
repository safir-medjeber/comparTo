import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {GameEndPage} from "./game-end";

@NgModule({
  declarations: [
    GameEndPage
  ],
  imports: [
    IonicPageModule.forChild(GameEndPage)
  ],
  entryComponents: [
    GameEndPage
  ]
})
export class GameModule {}
