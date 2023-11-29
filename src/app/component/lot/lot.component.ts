import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IAddress } from 'src/app/share/models/address-model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router';
import { MatSortModule,Sort,MatSort } from '@angular/material/sort';

export interface LotDatas{
  idd:string,
  manager_id:string,
  name?:"string",
  address:IAddress,
  properties:number
  events?:any  // changing after by Event interface
  picture?:string
}



const ELEMENT_DATA:LotDatas[]=[
  {
    idd:"LOT251254",
    manager_id:"25",
    address:{street:"rue des alouettes",number:"123",postCode:"1000",city:"bruxelles",country:"Belgium"},
    properties:20
  },
  {
    idd:"LOT125436",
    manager_id:"28",
    address:{street:"rue des alouettes",number:"123",postCode:"1000",city:"bruxelles",country:"Belgium"},
    properties:7
  },
  {
    idd:"LOT121236",
    manager_id:"25",
    address:{street:"rue des alouettes",number:"123",postCode:"1000",city:"bruxelles",country:"Belgium"},
    properties:5
  },
  {
    idd:"LOT125411",
    manager_id:"25",
    address:{street:"rue des alouettes",number:"123",postCode:"1000",city:"bruxelles",country:"Belgium"},
    properties:10
  },
]

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss'],
  standalone:true,
  imports:[MatTableModule,MatPaginatorModule,MatButtonModule,MatSortModule]
})

export class LotComponent {

  private title:string="SynGestBel - Lot";
  pageTitle:string = "Lot manager";
  displayColumns:String[]=['idd','address','properties','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // data demo -> db after
  @ViewChild(MatSort) sort:MatSort = new MatSort();


  constructor(
    private titleService:Title,
    private router:Router
    ){
    titleService.setTitle(this.title);
   }

   showDetail(id:string){
    const path:string = "/lot/"+id+"/detail";
    this.router.navigate([path]);
   }

   ngAfterViewinit(){
    this.dataSource.sort=this.sort;
    this.sort.sortChange.subscribe(sort=>{
      console.log(sort);

    })
  }




}
