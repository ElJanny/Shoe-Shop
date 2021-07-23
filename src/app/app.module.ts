import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageLayoutComponent } from './layout/landing-page-layout/landing-page-layout.component';
import { WebshopLayoutComponent } from './layout/webshop-layout/webshop-layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/landing-page-layout/header/header.component';
import { SideBarComponent } from './layout/webshop-layout/side-bar/side-bar.component';
import { MaterialModuleModule } from './modules/material-module/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageLayoutComponent,
    WebshopLayoutComponent,
    NavbarComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }