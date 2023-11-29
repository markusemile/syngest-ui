import { Component, EventEmitter, Input, Output } from '@angular/core';
import { topData } from './top-data';
import { ActivatedRoute, ActivationEnd, Router, RoutesRecognized } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

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
  constructor(private router:Router,private route:ActivatedRoute){

   }


  ngAfterViewInit(){
    this.route.firstChild?.url.subscribe(res=>{
      console.log(res);

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
