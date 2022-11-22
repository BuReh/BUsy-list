import { Component, EventEmitter, OnInit } from '@angular/core';
import { List } from '../shared/list.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: List[] = []

  constructor(private slList: ListService) { }

  ngOnInit(){
    this.lists = this.slList.getList();
    this.slList.listChanged
      .subscribe(
        (lists: List[]) => {
          this.lists = lists;
        }
      )
  }

}
