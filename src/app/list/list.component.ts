import { Component, Input, OnInit } from '@angular/core';
import { List } from '../shared/list.model';
import { ListService } from './list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: {todo: string};
  // lists: List[];

   constructor(private liService: ListService) { }

  ngOnInit(){
    // this.lists = this.liService.getList();
    // this.liService.listChanged
    //   .subscribe(
    //     (lists: List[]) => {
    //       this.lists = lists;
    //     }
    //   );
  }

}
