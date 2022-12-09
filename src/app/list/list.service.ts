import { List } from "../shared/list.model"
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ListService {
  // listChanged = new EventEmitter<List[]>();

  // private lists: List[] = [
  //   new List ('homework'),
  //   new List ('chores')
  // ]

  getList(){
    return this.lists.slice();
  }

  // addList(list: List){
  //   this.lists.push(list);
  //   this.listChanged.emit(this.lists.slice());
  // }

  // addLists(lists: List[]){
  //   this.lists.push(...lists);
  //   this.listChanged.emit(this.lists.slice());
  // }

  // removeList() {

  // }


  lists = [
    {todo: 'homework'},
    {todo: 'chores'}
  ];

  listChanged = new Subject<{todo:string}[]>();

  addlist(todo: string){
    this.lists.push({todo: todo});
    this.listChanged.next(this.getList())
  }

  removeList(){
    this.lists.pop();
    this.listChanged.next(this.getList())
  }
}
