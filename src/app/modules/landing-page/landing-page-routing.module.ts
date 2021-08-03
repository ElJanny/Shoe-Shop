import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageLayoutComponent } from 'src/app/layout/landing-page-layout/landing-page-layout.component';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
