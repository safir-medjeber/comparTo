import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../data/Item";
import {Observable} from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

const NAME = 0;
const URL = 1;
const VALUE = 2;
const THEMATIC = 3;
const UNIT = 4;


@Injectable()
export class ItemService {

  items: Item[] = [];

  constructor(private  httpClient: HttpClient) {
  }

  // public loadData(): Item[]{
  //   this.loadFile();
  //   return this.items;
  // }


  public getData(): Observable<Item[]>{
    return of(this.loadFile())
  }

  private loadFile() {
    this.httpClient.get("assets/data/dataInput.csv", { responseType: 'text'}).subscribe(data =>this.extractData(data), error => ItemService.handleError(error));
    return this.items;
  }

  private static handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }


  // private extractData(csvData: string) {
  //   let allTextLines = csvData.split(/\r\n|\n/);
  //   this.items = new Array(allTextLines.length);
  //   for ( let line = 1; line < allTextLines.length; line++) {
  //     let data = allTextLines[line].split(',');
  //     console.log(data);
  //     this.items[line-1] = new Item(data[0],data[1],Number(data[2]),data[3],data[3]);
  //   }
  // }

  private extractData(csvData: string) {
    let lines = csvData.split(/\r\n|\n/);
    this.serializeData(lines);
    this.removeHeader();
    console.log(this.items);
  }

  private serializeData(lines: String[]){
    lines.forEach(line => {
      let columns =  line.split(',');
      this.items.push(new Item(columns[NAME],columns[URL],Number(columns[VALUE]),columns[THEMATIC],columns[UNIT]));
    });
  }

  private removeHeader(){
    this.items.shift();
  }

  public getItemsByThematic(thematic: string): Item[]{
    return this.items.filter(item => item.thematic === thematic )
  }
}
