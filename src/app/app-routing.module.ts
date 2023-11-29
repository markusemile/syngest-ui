import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LotComponent } from './component/lot/lot.component';
import { OwnerComponent } from './component/owner/owner.component';
import { LodgerComponent } from './component/lodger/lodger.component';
import { EventComponent } from './component/event/event.component';
import { DocumentsComponent } from './component/documents/documents.component';
import { PropertyComponent } from './component/property/property.component';
import { PropertyRoutingModule } from './component/property/property-routing.module';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent} ,
  {path:'lot',component:LotComponent,
    data:{
      title:'Dashboard/Lot',
      returnTo:'dashboard',
    }},
  {path:'owner',component:OwnerComponent,data:{title:'Dashboard',returnTo:'dashboard'}},
  {path:'lodger',component:LodgerComponent,data:{title:'Dashboard',returnTo:'dashboard'}},
  {path:'event',component:EventComponent,data:{title:'Dashboard',returnTo:'dashboard'}},
  {path:'document',component:DocumentsComponent,data:{title:'Dashboard',returnTo:'dashboard'}},
  {path:"property",
    loadChildren:()=>import('./component/property/property.module')
      .then(m=>m.PropertyModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
