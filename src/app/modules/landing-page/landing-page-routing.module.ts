import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageLayoutComponent } from 'src/app/layout/landing-page-layout/landing-page-layout.component';

const routes: Routes = [{ path: '', component: LandingPageLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
