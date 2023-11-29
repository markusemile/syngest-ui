import { Injectable } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Observable, distinctUntilChanged, filter, map } from "rxjs";

export interface IBreadCrumb{
  title:string,
  path?:string
}

@Injectable({providedIn:'root'})
export class BreadCrumbService{

  public item$:Observable<IBreadCrumb>;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute
  ){

    this.item$ = this._router.events.pipe(
      filter(event=>event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(_=>this._builderBreadCrumb(this._route.root))
    );
  }

  private _builderBreadCrumb(route : ActivatedRoute,url:string='',breadcrumbs:IBreadCrumb={title:'',path:''}):IBreadCrumb{
  let title = 'Dashboard';
  let path = null;
  let indice:string='';
  while(route.firstChild){
    route = route.firstChild
    title = (route.snapshot.data['title']) ? route.snapshot.data['title'] : "Dashboard";
    path = (route.snapshot.data['returnTo']) ? route.snapshot.data['returnTo']: null;
    if(route.snapshot.queryParams['id']) indice=route.snapshot.queryParams['id']
    if(route.snapshot.params['id']) indice=route.snapshot.params['id']
    console.log(route.snapshot);

    breadcrumbs={title:title,path:path}


  }
  if(indice!==undefined && indice !== '') breadcrumbs.title+=" ("+indice+" )";
  return breadcrumbs;


}

}
