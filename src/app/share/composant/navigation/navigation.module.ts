import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule} from '@angular/material/sidenav'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './navigation.component';
import { TopBarModule } from '../top-bar/top-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SublevelNavigationComponent } from './sublevel-navigation.component';




@NgModule({
  declarations: [
    NavigationComponent,
    SublevelNavigationComponent,
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
