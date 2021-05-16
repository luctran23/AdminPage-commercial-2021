import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from '../app/layouts/fullwidth/fullwidth.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgAuthService } from "../app/services/ng-auth.service";
import { EditStatusComponent } from './modules/bills/edit-status/edit-status.component';

@NgModule({
  declarations: [
    AppComponent,
    EditStatusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullwidthModule,
    DefaultModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NgAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
