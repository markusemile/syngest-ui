import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PropertyEditorComponent } from './property-editor/property-editor.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';


@NgModule({
  declarations: [
    PropertyEditorComponent,
    PropertyDetailComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    FlexLayoutModule,
  ],
  exports:[
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
