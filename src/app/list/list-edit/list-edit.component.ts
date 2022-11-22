import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { List } from 'src/app/shared/list.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;

  constructor(private slList: ListService) { }

  ngOnInit() {
  }

  onAdd(){
    const listName = this.nameInputRef.nativeElement.value;
    const newList = new List(listName);
    this.slList.addList(newList);
  }

}
