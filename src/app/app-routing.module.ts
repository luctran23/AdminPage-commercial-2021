import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { LoginComponent } from './modules/login/login.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';


const routes:Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  {
    path: '',
    component: FullwidthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
