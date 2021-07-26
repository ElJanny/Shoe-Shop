import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "",
  loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule)},
  {path: "shoe",
  loadChildren: () => import('./modules/default-module/default-module.module').then(m => m.DefaultModuleModule)},
  {path: "webshop",
  loadChildren: () => import('./modules/webshop/webshop.module').then(m => m.WebshopModule)},
  {path: "**", redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
