import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Micro1Component } from './micro1/micro1.component';
import { Micro2Component } from './micro2/micro2.component';
import { ErrorComponent } from './error/error.component';
import { CoreAppStoreComponent } from './core-app-store/core-app-store.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Micro1Component,
    Micro2Component,
    ErrorComponent,
    CoreAppStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
