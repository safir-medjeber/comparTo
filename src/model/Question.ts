import {Item} from "./Item";

export interface Question {
  question?: string
  proposition1: Item
  proposition2: Item

  replyA(): boolean

  replyB(): boolean
}

export class WhoIsHigher implements Question {
  constructor(readonly proposition1: Item, readonly proposition2: Item) {
  }

  replyA = () => this.proposition1.value >= this.proposition2.value
  replyB = () => this.proposition2.value >= this.proposition1.value

}
