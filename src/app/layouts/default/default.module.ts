import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { DefaultComponent } from './default.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
