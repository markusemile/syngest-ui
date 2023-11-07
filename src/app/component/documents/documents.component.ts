import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {


  private title:string="SynGestBel - Documents"

constructor(private titleService:Title){
  titleService.setTitle(this.title);
 }

}
