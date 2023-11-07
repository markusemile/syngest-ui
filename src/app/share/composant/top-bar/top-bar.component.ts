import { Component, EventEmitter, Input, Output } from '@angular/core';
import { topData } from './top-data';
import { Router, RoutesRecognized } from '@angular/router';

interface SideNavToggle{
  screenWidth : number;
  collapsed:boolean;
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Input() collapsed:boolean = false;
  @Input() screenWidth:number = 0;

  @Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();

  barData = topData;
  returnMessage:{label:string,url:string}|any;

  constructor(private route:Router){}

  ngOnInit(){
   this.route.events.subscribe((datas)=>{
    if(datas instanceof RoutesRecognized){
      if(datas.state.root.firstChild){
        const data = datas.state.root.firstChild.data;
        if(data && data['return']){
         this.returnMessage={label:data['return'],url:"dashboard"};
        }else{
          this.returnMessage='';
        }
      }

    }
   })

  }

  getBodyClass():string{
    let styleClass='';
    if(this.collapsed && this.screenWidth<768){
      styleClass='body-trimmed';
    }else if(this.collapsed && this.screenWidth<=768 && this.screenWidth>0){
      styleClass='body-md-screen';
    }else if(this.collapsed && this.screenWidth>768){
      styleClass='open'
    }
    return styleClass;
  }



}
