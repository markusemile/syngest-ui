import { Component, Input, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() collapsed:boolean = false;
  @Input() screenWidth:number = 0;
  @Input() title='';

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
   this.route.data.subscribe(data=>{
    //console.log(data);

   });
  }


  getBodyClass():string{
    let styleClass='';
    if(this.collapsed && this.screenWidth<768){
      styleClass='body-trimmed ';
    }else if(this.collapsed && this.screenWidth<=768 && this.screenWidth>0){
      styleClass='body-md-screen';
    }else if(this.collapsed && this.screenWidth>768){
      styleClass='open'
    }
    return styleClass;
  }


}
