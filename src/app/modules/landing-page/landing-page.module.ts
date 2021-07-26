import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageLayoutComponent } from 'src/app/layout/landing-page-layout/landing-page-layout.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageLayoutComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
