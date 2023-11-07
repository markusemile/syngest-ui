import { Component, EventEmitter, Output} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

private title:string="SynGestBel - Dashboard"

constructor(private titleService:Title){
  titleService.setTitle(this.title);
 }




}
