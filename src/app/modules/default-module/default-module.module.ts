import { MaterialModuleModule } from './../material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultModuleRoutingModule } from './default-module-routing.module';
import { DefaultModuleComponent } from './default-module.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { TablecontentComponent } from './cart/tablecontent/tablecontent.component';


@NgModule({
  declarations: [
    DefaultModuleComponent,
    ContactComponent,
    CartComponent,
    TablecontentComponent
  ],
  imports: [
    CommonModule,
    DefaultModuleRoutingModule,
    MaterialModuleModule
  ]
})
export class DefaultModuleModule { }
