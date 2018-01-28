import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {GameEndPage} from "./game-end";
import {GameEndInformationComponent} from "./game-information/game-end-information.component";

@NgModule({
  declarations: [
    GameEndPage,
    GameEndInformationComponent
  ],
  imports: [
    IonicPageModule.forChild(GameEndPage)
  ],
  entryComponents: [
    GameEndPage
  ]
})
export class GameEndModule {}
