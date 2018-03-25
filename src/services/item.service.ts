import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../model/Item";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import {Theme} from "../model/Theme";



const NAME = 0;
const URL = 1;
const VALUE = 2;
const THEMATIC = 3;


@Injectable()
export class ItemService{

  private readonly items: Observable<Item[]>;
  constructor(private  httpClient: HttpClient) {
    this.items = this.getData()
  }

  public getData(): Observable<Item[]>{
    return this.httpClient.get("assets/data/dataInput.scsv", { responseType: 'text'}).map(data => this.extractData(data));
  }

  private extractData(csvData: string): Item[] {
    return  csvData.split(/\r\n|\n/).slice(1).map(this.serializeData);
  }


  private serializeData(line: String): Item{
    let columns =  line.split(';');
    let theme = (<Theme>columns[THEMATIC]);
    return new Item(columns[NAME],columns[URL],Number(columns[VALUE]), theme);
  }


  public getItemsByThematic(thematic: string): Observable<Item[]>{
    return this.items.map(item => item.filter(item => item.thematic === thematic));
  }



}
