import { Component, OnInit } from '@angular/core';
import { ListService } from './list/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   loadedFeature = 'login'
   onNavigate(feature: string){
     this.loadedFeature = feature;
   }

  lists: {todo: string}[] = [];

  constructor(private liService: ListService){}

  ngOnInit() {
      this.lists = this.liService.lists;
  }
}
