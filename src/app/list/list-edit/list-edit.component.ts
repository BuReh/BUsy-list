import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { List } from 'src/app/shared/list.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})

export class ListEditComponent {
  //  @ViewChild('todoInput') todoInputRef: ElementRef;


  constructor(private liService: ListService) { }


  onAdd(thingsToDo: string){
    this.liService.addlist(thingsToDo);
    console.log('something');
   }

   onDelete(){

   }

}
