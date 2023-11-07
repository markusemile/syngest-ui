import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lodger',
  templateUrl: './lodger.component.html',
  styleUrls: ['./lodger.component.scss']
})
export class LodgerComponent {

  private title:string="SynGestBel - Lodger"

constructor(private titleService:Title){
  titleService.setTitle(this.title);
 }

}
