import { Component, OnInit } from '@angular/core';
import { List } from './list.model';
import { ListService } from './list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: List[];

   constructor(private liService: ListService) { }

  ngOnInit(){
    this.lists = this.liService.getList();
    this.liService.listChanged
      .subscribe(
        (lists: List[]) => {
          this.lists = lists;
        }
      )
  }

}
