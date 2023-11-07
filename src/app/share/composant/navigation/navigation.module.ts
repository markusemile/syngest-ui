import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule} from '@angular/material/sidenav'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './navigation.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { TopBarModule } from '../top-bar/top-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    NavigationComponent,
    NavItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    TopBarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ],
  exports:[
    NavigationComponent,
    ]
})
export class NavigationModule { }
