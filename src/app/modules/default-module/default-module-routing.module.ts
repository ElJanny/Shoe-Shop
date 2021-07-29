import { DefaultModuleComponent } from './default-module.component';
import { DefaultLayoutComponent } from './../../layout/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: DefaultModuleComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultModuleRoutingModule { }
