import { DefaultModuleComponent } from './default-module.component';
import { DefaultLayoutComponent } from './../../layout/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: DefaultModuleComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultModuleRoutingModule { }
