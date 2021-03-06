import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebshopLayoutComponent } from './layout/webshop-layout/webshop-layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/landing-page-layout/header/header.component';
import { SideBarComponent } from './layout/webshop-layout/side-bar/side-bar.component';
import { MaterialModuleModule } from './modules/material-module/material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LandingPageLayoutComponent } from './layout/landing-page-layout/landing-page-layout.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    WebshopLayoutComponent,
    NavbarComponent,
    HeaderComponent,
    SideBarComponent,
    MainLayoutComponent,
    LandingPageLayoutComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports:[MaterialModuleModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
