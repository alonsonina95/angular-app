import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchDeleteComponent } from './pages/search-delete/search-delete.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CreateNewVideoComponent } from './pages/create-new-video/create-new-video.component';

const routes: Routes = [
  {path: "", redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"search", component: SearchDeleteComponent},
  {path:"registration", component: RegistrationComponent},
  {path: "login", component: LoginPageComponent},
  {path: "new-video", component:CreateNewVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
