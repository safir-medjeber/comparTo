import {Injectable} from "@angular/core";

import {GameRulesService} from "./gameRules.service";
import {ItemService} from "./item.service";
import {Item} from "../model/Item";
import {Theme} from "../model/Theme";

@Injectable()
export class GameService {
  private game: GameRulesService;
  private theme: Theme;
  private items: Item[];

  constructor(private itemService: ItemService) {
  }

  getGame() {
    let game = this.game;
    this.game = new GameRulesService(this.theme, this.items);
    return game;
  }

  setTheme(theme: Theme): Promise<void> {
    this.items = null;
    this.theme = theme;
    return this.itemService.getItemsByThematic(this.theme).toPromise().then(items => {
      this.items = items
      this.game = new GameRulesService(theme, items)
    })
  }
}
