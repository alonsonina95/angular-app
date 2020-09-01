import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/interfaces/contact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService,GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('loginRef', {static: true}) loginElement: ElementRef;
  user: User = { username:"", password:"" };
  signinForm: FormGroup;
  socialUser: SocialUser;
  loggedIn: boolean = false;
  constructor(private fb: FormBuilder, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.authState.subscribe((socialUser) => {
      this.socialUser = socialUser;
      this.loggedIn = (socialUser != null);
      console.log(this.socialUser);
    })
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  public logIn(): void {
    console.log("logged in");
  }

}
