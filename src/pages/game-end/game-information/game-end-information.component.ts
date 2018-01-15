import {Component, Input} from "@angular/core";

@Component({
  selector: 'game-end-information',
  template: `
    <ion-grid class="no-padding">
      <ion-row class="container" align-items-center >
        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 >
          <div class="{{gameInfo}}-icon"></div>
        </ion-col>
        <ion-col col-6 col-sm-6 col-md-6 col-lg-6  col-xl-6 >
          <span>{{value}}</span>
        </ion-col>
      </ion-row>
    </ion-grid>
  `
})


export class GameEndInformationComponent {
  @Input() value: string;
  @Input() gameInfo: string;
}


