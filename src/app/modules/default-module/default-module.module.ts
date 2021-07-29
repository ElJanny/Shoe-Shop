import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultModuleRoutingModule } from './default-module-routing.module';
import { DefaultModuleComponent } from './default-module.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    DefaultModuleComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    DefaultModuleRoutingModule,
  ]
})
export class DefaultModuleModule { }
