import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchDeleteComponent } from './pages/search-delete/search-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetContactsService } from './services/get-contacts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CreateNewVideoComponent } from './pages/create-new-video/create-new-video.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatIconModule } from '@angular/material/icon'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    SearchDeleteComponent,
    LoginPageComponent,
    SidenavComponent,
    HomeComponent,
    RegistrationComponent,
    CreateNewVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    FontAwesomeModule
  ],
  providers: [GetContactsService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('926454633580-4frvf9oshpbjihmi7nga11nla59m0kuh.apps.googleusercontent.com')
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
