import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../data/Item";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

const NAME = 0;
const URL = 1;
const VALUE = 2;
const THEMATIC = 3;
const UNIT = 4;


@Injectable()
export class ItemService {


  constructor(private  httpClient: HttpClient) {
  }

  public getData(): Observable<Item[]>{
    return this.httpClient.get("assets/data/dataInput.csv", { responseType: 'text'}).map(data => this.extractData(data));
  }

  private extractData(csvData: string): Item[] {
    let lines = csvData.split(/\r\n|\n/);
    lines.shift();
    return lines.map(line => this.serializeData(line));
  }


  private serializeData(line: String): Item{
    let columns =  line.split(',');
    return new Item(columns[NAME],columns[URL],Number(columns[VALUE]),columns[THEMATIC],columns[UNIT]);
  }


  // public getItemsByThematic(thematic: string): Item[]{
  //   return this.items.filter(item => item.thematic === thematic )
  // }
}
