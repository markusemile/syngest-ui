import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";

const routes:Routes=[
  {path:"lot/:id/detail",component:DetailComponent,data:{title:'dashboard/Lot manager/detail',returnTo:'dashboard/lot'}}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class LotRoutingModule{}
