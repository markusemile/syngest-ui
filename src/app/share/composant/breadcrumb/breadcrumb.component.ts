import { Component } from '@angular/core';
import { BreadCrumbService } from './breadcrumb-service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone:true,
  imports:[MatIconModule,ReactiveFormsModule,FormsModule,CommonModule,RouterModule]
})

export class BreadcrumbComponent {

  datas:{title:string,path:string}[]=[];

constructor(private _service:BreadCrumbService){
  const l = this._service.item$;
  l.subscribe(res=>{
    this.datas=[];
    const titles:string[] =  res.title.split('/');
    const path:string[] = (res.path) ? res.path?.split('/') : ["dashboard"];

    titles.forEach(item=>{
      console.log(item);

      this.datas.push({title:item,path:path[titles.indexOf(item)]})
    })

  });

}

}
