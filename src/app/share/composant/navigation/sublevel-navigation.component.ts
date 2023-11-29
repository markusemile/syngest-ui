import { Component, Input } from '@angular/core';
import { INavbarData, fadeInOut } from './navHelper';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sublevel-navigation',
  template: `
         <ul *ngIf="collapsed && data.items && data.items.length > 0"
        [@submenu]="expanded
          ? {value:'visible',params:{transitionParams:'400ms ease',height:'*'}}
          : {value:'hidden',params:{transitionParams:'400ms ease'},height:'0'}"
          class="sublevel-nav"
        >

        <li *ngFor="let item of data.items" class="sublevel-nav-item">
          <a class="sublevel-nav-link"  (click)="handleClick(item)" *ngIf="item.items && item.items.length>0" [ngClass]="getActiveClass(item)">
            <i class="sublevel-link-icon fa fa-circle">{{item.icon}}</i>
            <span class="sublevel-link-text" @fadeInOut >{{item.label}}</span>
            <i *ngIf="item.items && item.items.length>0" class="menu-collapse-icon" [ngClass]="!item.expanded ? 'fa-duotone fa-angle-right':'fa-duotone fa-angle-down' "></i>
          </a>
          <a class="sublevel-nav-link"  [ngClass]="getActiveClass(data)" *ngIf="!item.items || item.items.length===0" [routerLink]="'/'+[item.routerLink]" routerLinkActive="active-submenu" [routerLinkActiveOptions]="{exact:true}" >
            <i class="sublevel-link-icon fas fa-circle" >{{item.icon}}</i>
            <span class="sublevel-link-text" @fadeInOut >{{item.label}}</span>
          </a>
          <app-sublevel-navigation *ngIf="item.expanded && item && item.items"
              [collapsed]="collapsed"
              [data]="item"
              [expanded]="item.expanded"
              [multiple]="multiple">
            </app-sublevel-navigation>
        </li>



        </ul>
  `,
  styleUrls:['./navigation.component.scss'],
  animations:[
    fadeInOut,
    trigger('submenu',[
      state('hidden',style({height:'0',overflow:'hidden'})),
      state('visible',style({height:'*'})),
      transition('visible<=>hidden',[style({overflow:'hidden'}),animate('{{transitionParams}}')]),
      transition('void=>*',animate(0))
    ])
  ]
})
export class SublevelNavigationComponent {

  @Input() data:INavbarData={
    label:'',
    routerLink:'',
    expanded:false
  }

  @Input() collapsed:boolean=false;
  @Input() multiple:boolean=false;
  @Input() expanded:boolean=false;
  @Input() animating:boolean|undefined;

  constructor(public router:Router){}

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for(let modelItem of this.data.items) {
          if (item !==modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

  getActiveClass(item: INavbarData): string {
    return item.expanded && this.router.url.includes(item.routerLink)
      ? 'active-sublevel'
      : '';
  }

}
