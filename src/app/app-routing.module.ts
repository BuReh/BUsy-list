import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListComponent } from './list/list.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // locahost:4200
  { path: '', component: LandingPageComponent, pathMatch: 'full'},
  // localhost:4200/login
  { path: 'login', component: LoginComponent },
  // localhost:4200/lists
  { path: 'lists', component: ListComponent},
  // localhost:4200/users/settings
  { path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
