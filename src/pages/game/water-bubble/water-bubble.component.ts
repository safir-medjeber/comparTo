import {Component, Input} from "@angular/core";

@Component({
  selector: 'water-bubble',
  templateUrl: 'water-bubble.component.html'
})
export class WaterBubbleComponent {
  @Input() reset: boolean;
}
