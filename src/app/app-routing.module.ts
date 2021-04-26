import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { LoginComponent } from './modules/login/login.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { ErrorComponent } from './modules/error/error.component';
import { PhonesComponent } from './modules/phones/phones.component';
import { LaptopsComponent } from './modules/laptops/laptops.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { BrandsComponent } from './modules/brands/brands.component';
import { CamerasComponent } from './modules/cameras/cameras.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'phones', component: PhonesComponent },
      { path: 'laptops', component: LaptopsComponent },
      { path: 'cameras', component: CamerasComponent },
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
  },
  { path: '**', component: ErrorComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
