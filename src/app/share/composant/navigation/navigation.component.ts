import { Component, EventEmitter, HostListener, Output } from '@angular/core';

import { navbarData } from './nav-datas';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData } from './navHelper';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth : number;
  collapsed:boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',style({opacity:1})
        )
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',style({opacity:0}))
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform:'rotate(0deg)',offset:'0'}),
            style({transform:'rotate(2turn)',offset:'1'})
          ])
        )
      ])
    ])
  ]
})
export class NavigationComponent {

  collapsed = false;
  navData = navbarData;
  screenWidth=0;
  multiple:boolean=false;


  @Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();

  constructor(private route:Router){}


  ngOnInit():void{
    this.screenWidth= window.innerWidth;
  }

  @HostListener('window:resize',['event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
      if(this.screenWidth<768){
        this.collapsed=false;
        this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
      }
  }

  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }
  closeCollapse(){
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  getActiveClass(data: INavbarData): string {
    return this.route.url.includes(data.routerLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }


  }
}
