import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {GamePage} from "./game";

import {ItemComponent} from "./item/item.component";
import {CounterComponent} from "../../components/counter.component";
import {WaterBubbleComponent} from "./water-bubble/water-bubble.component";

@NgModule({
  declarations: [
    GamePage,
    ItemComponent,
    WaterBubbleComponent,
    CounterComponent
  ],
  imports: [
    IonicPageModule.forChild(GamePage)
  ],
  entryComponents: [
    GamePage
  ]
})
export class GameModule {}
