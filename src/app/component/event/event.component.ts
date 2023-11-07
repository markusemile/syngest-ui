import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  private title:string="SynGestBel - Events"

constructor(private titleService:Title){
  titleService.setTitle(this.title);
 }


}
