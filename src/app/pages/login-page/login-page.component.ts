import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/contact';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: User = { username:"", password:"" };
  constructor() { }

  ngOnInit(): void {
  }

  public logIn(): void {
    console.log("logged in");
  }

}
