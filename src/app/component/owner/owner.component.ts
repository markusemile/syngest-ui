import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {

  private title:string="SynGestBel - Owner"

  constructor(private titleService:Title){
    titleService.setTitle(this.title);
   }

}
