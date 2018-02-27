import {getTheme, Theme, ThemeProps} from "./Theme";

export class Item {
  public readonly theme: ThemeProps
  constructor(
    public readonly name: string,
    public readonly url: string,
    public readonly value: number,
    public readonly thematic: Theme) {
      this.theme = getTheme[thematic]
  }
}
