import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { List } from 'src/app/list/list.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
   @ViewChild('todoInput') todoInputRef: ElementRef;


  constructor(private liService: ListService) { }

  ngOnInit() {
  }

   onAdd(){
     const listToDo = this.todoInputRef.nativeElement.value;
     const newList = new List(listToDo);
     this.liService.addList(newList);

   }

}
