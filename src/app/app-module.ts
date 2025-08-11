import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Projekte } from './projekte/projekte';
import { Kontakt } from './kontakt/kontakt';
import { UeberMich } from './ueber-mich/ueber-mich';
import { Header } from './header/header';

@NgModule({
  declarations: [
    App,
    Home,
    Projekte,
    Kontakt,
    UeberMich,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
