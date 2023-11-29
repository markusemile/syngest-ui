import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { LotRoutingModule } from './lot-routing.modules';




@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    LotRoutingModule
  ],
  exports:[
    LotRoutingModule
  ]
})
export class LotModule { }
