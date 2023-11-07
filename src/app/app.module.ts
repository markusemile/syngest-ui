import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule} from '@angular/cdk/layout'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModuleModule } from './ui/material/ui-module.module';
import { NavigationModule } from './share/composant/navigation/navigation.module';
import { TopBarModule } from './share/composant/top-bar/top-bar.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BodyComponent } from './body/body.component';
import { LotComponent } from './component/lot/lot.component';
import { EventComponent } from './component/event/event.component';
import { OwnerComponent } from './component/owner/owner.component';
import { LodgerComponent } from './component/lodger/lodger.component';
import { DocumentsComponent } from './component/documents/documents.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BodyComponent,
    LotComponent,
    EventComponent,
    OwnerComponent,
    LodgerComponent,
    DocumentsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiModuleModule,
    LayoutModule,
    NavigationModule,
    TopBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
