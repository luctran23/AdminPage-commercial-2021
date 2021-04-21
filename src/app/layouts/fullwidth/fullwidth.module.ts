import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../modules/login/login.component';    
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class FullwidthModule { }
