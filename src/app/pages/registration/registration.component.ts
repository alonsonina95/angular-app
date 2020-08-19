import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/interfaces/contact'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  newUser: NewUser = { username:"", password:"", firstname: "", lastname: "", email: "" };
  constructor() { }

  ngOnInit(): void {
  }

  public signUp() {
    // TODO - send data
  }

}
