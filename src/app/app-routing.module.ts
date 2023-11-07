import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LotComponent } from './component/lot/lot.component';
import { OwnerComponent } from './component/owner/owner.component';
import { LodgerComponent } from './component/lodger/lodger.component';
import { EventComponent } from './component/event/event.component';
import { DocumentsComponent } from './component/documents/documents.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,data:{ title: 'Personal Dashboard'}} ,
  {path:'lot',component:LotComponent,
    data:{
      title:'Lot manager',
      return:'Dashboard',
    }},
  {path:'owner',component:OwnerComponent,data:{title:'Owner manager',return:'Dashboard'}},
  {path:'lodger',component:LodgerComponent,data:{title:'Lodger manager',return:'Dashboard'}},
  {path:'event',component:EventComponent,data:{title:'Event manager',return:'Dashboard'}},
  {path:'document',component:DocumentsComponent,data:{title:'Documents manager',return:'Dashboard'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
