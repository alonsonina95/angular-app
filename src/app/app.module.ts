import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchDeleteComponent } from './pages/search-delete/search-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GetContactsService } from './services/get-contacts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CreateNewVideoComponent } from './pages/create-new-video/create-new-video.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchDeleteComponent,
    LoginPageComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    RegistrationComponent,
    CreateNewVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [GetContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
