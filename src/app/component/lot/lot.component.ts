import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss']
})
export class LotComponent {


  private title:string="SynGestBel - Lot"

  constructor(private titleService:Title){
    titleService.setTitle(this.title);
   }


}
