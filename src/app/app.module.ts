import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { FullwidthModule } from '../app/layouts/fullwidth/fullwidth.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullwidthModule,
    DefaultModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
