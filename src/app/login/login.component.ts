import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selectedLogin = Login;

  constructor() { }

  ngOnInit(): void {
  }

}
