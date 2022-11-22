import { List } from "../shared/list.model"
import { EventEmitter } from "@angular/core";

export class ListService {
  listChanged = new EventEmitter<List[]>();

  private lists: List[] = [
    new List ('homework'),
    new List ('chores')
  ]

  getList(){
    return this.lists.slice();
  }

  addList(list: List){
    this.lists.push(list);
    this.listChanged.emit(this.lists.slice());
  }

  addLists(lists: List[]){
    this.lists.push(...lists);
    this.listChanged.emit(this.lists.slice());
  }
}
