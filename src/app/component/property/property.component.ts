import { Component,ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EnumHeating, EnumkitchenType, IProperty, EnumPropertyType, EnumPeb } from 'src/app/share/models/property-models';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSortModule,Sort,MatSort} from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule} from '@angular/cdk/accordion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';


const ELEMENT_DATA:IProperty[]=[
  {
    id:5,
    lot_id:"LOT251254",
    owner:"OWN215114",
    property_id:"PRO5115561",
    year:1986,
    property_type:EnumPropertyType.house,
    address:{street:"street5",number:"num5",postCode:"posteCode5",city:"city5",country:"country5"},
    surface_habitable:120,
    room:7,
    bedroom:3,
    toilet:2,
    bathroom:2,
    kitchen:EnumkitchenType.equipped,
    peb:EnumPeb.C,
    heating:EnumHeating.gaz,
    basement:true,
    doubleGlazing:true,
    insurer:"AG"
  },
  {
    id:2,
    lot_id:"LOT251214",
    owner:"OWN165447",
    property_id:"PRO5115511",
    year:1938,
    property_type:EnumPropertyType.warehouse,
    address:{street:"street2",number:"num2",postCode:"posteCode2",city:"city2",country:"country2"},
    surface_habitable:200,
    room:2,
    bedroom:0,
    toilet:1,
    bathroom:0,
    kitchen:1,
    peb:EnumPeb.F,
    heating:EnumHeating.other,
    basement:true,
    doubleGlazing:true,
    insurer:"AG"
  },
  {
    id:9,
    lot_id:"LOT231254",
    owner:"OWN165153",
    property_id:"PRO5115512",
    year:1954,
    property_type:EnumPropertyType.house,
    address:{street:"street9",number:"num9",postCode:"posteCode9",city:"city9",country:"country9"},
    surface_habitable:178,
    room:6,
    bedroom:2,
    toilet:1,
    bathroom:1,
    kitchen:1,
    peb:EnumPeb.D,
    heating:EnumHeating.heatingOil,
    basement:true,
    doubleGlazing:true,
    insurer:"AXA"
  },
]


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
  standalone:true,
  imports:[MatButtonModule,MatTableModule,MatSortModule,CdkAccordionModule,FlexLayoutModule,MatTooltipModule,MatIconModule  ]
})
export class PropertyComponent {

  private title:string="SynGestBel - Property";
  pageTitle:string = "Properties manager";


  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayColumns:string[]=["id","lotId","propertyId","action"];

  @ViewChild(MatSort) sort: MatSort = new MatSort();



  constructor(
    private titleService:Title,
    private router:Router,
    private route:ActivatedRoute){
    this.titleService.setTitle(this.title);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe((sort:Sort)=>{
      this.tableSort(sort.active,sort.direction)

    })
  }

  tableSort(active:string,direction:string){
   switch(active){
    case('lotId'):
      this.dataSource.data=this.dataSource.data.sort((a,b)=>{
        const isAsc = direction==='asc';
        return this.compare(a.lot_id,b.lot_id,isAsc)
      })
      break;
    case('propertyId'):
      this.dataSource.data=this.dataSource.data.sort((a,b)=>{
        const isAsc = direction==='asc';
        return this.compare(a.property_id,b.property_id,isAsc)
      })
      break;
      default: null;
   }


  }
  compare(a:any,b:any,isAsc:boolean){
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
  }

  deleteProperty(e:string){
    if(confirm('Do you really want to delete this Property ? ('+e+')'))
      alert("(soft) Deleted property "+e+" successfully !");
  }

  editProperty(e:string){
    const path = "edit"
    this.router.navigate([path],{queryParams:{id:e},queryParamsHandling:"merge",relativeTo:this.route},)
  }

}
