import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyEditorComponent } from './property-editor/property-editor.component';
import { PropertyComponent } from './property.component';

export const propertyRoutes: Routes = [
  {path:':edit',component:PropertyEditorComponent,data:{title: 'Dashboard/Property Managers/Edit', returnTo: 'dashboard/property'},pathMatch:'full'},
  {path:'',component:PropertyComponent,data:{ title:'Dashboard/Property', returnTo:'dashboard'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(propertyRoutes)
  ],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
