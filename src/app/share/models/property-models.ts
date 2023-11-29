import { IOwner } from "./IOwner-model";
import { IAddress } from "./address-model";

export enum EnumkitchenType{
  equipped=1,
  unequipped=0
}

export enum EnumHeating{
  gaz=0,
  heatingOil=1,
  electricity=2,
  solar=3,
  wood=4,
  pelet=5,
  heatPump=6,
  other=7
}

export enum EnumPropertyType{
  investmentProperty=0,
  apartement=1,
  house=2,
  loft=3,
  studio=4,
  garage=5,
  shop=6,
  warehouse=7,
  land=8,
}

export enum EnumPeb{
  A=0,
  B=1,
  C=2,
  D=3,
  E=4,
  F=5,
  G=6
}

export interface IProperty{
  id:number,
  lot_id:string,
  owner:IOwner,
  property_id:string,
  year:number,
  property_type:EnumPropertyType,
  address:IAddress,
  surface_habitable:number,
  room:number,
  bedroom:number,
  toilet:number,
  bathroom:number,
  kitchen:EnumkitchenType,
  peb:EnumPeb,
  heating:EnumHeating,
  basement:boolean,
  doubleGlazing:boolean,
  insurer:string

  surface_ground?:number,
  surface_living?:number,
  surface_kitchen?:number,
  surface_bedrooms?:number[],
  surface_basement?:number
  surface_garden?:number,
  dressing?:boolean,
  office?:boolean,
  garden?:boolean,
  terrace?:boolean,
  pool?:boolean,
  armored_door?:boolean,
  alarm?:boolean,

}
