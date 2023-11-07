import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

interface SideNavToggle{
  screenWidth : number;
  collapsed:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dashboard';
  isSideNavCollapsed=false;
  screenWidth=0;

  constructor(
    private titleService:Title,
    private route:ActivatedRoute
    ){
   titleService.setTitle(this.title);
  }


  ngOnInit(){
   this.route.data.subscribe(data=>{
    console.log(data);

   });
  }

  onToggleSideNav(e:SideNavToggle):void{

    this.isSideNavCollapsed=e.collapsed;
    this.screenWidth=e.screenWidth;

  }
}
