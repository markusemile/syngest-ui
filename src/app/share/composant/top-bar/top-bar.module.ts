import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar'
import { TopBarComponent } from './top-bar.component';
import { LayoutModule} from '@angular/cdk/layout'
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule} from '@angular/material/badge'
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';



@NgModule({
  declarations: [
    TopBarComponent,

  ],
  imports: [
  CommonModule,
  MatToolbarModule,
  LayoutModule,
  MatButtonModule,
  MatBadgeModule,
  RouterModule,
  BreadcrumbModule
  ],
  exports:[
    TopBarComponent
  ]
})
export class TopBarModule { }
