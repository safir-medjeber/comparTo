import {Component, Input} from "@angular/core";

import {Question} from "../../../model/Question";

@Component({
  selector: 'question',
  template: `<div class="question">{{question.question}}</div>`
}) export class QuestionComponent {
  @Input() question: Question;
  constructor() {
    console.log(this.question)
  }
}
