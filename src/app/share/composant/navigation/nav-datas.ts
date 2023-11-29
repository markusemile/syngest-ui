import { INavbarData } from "./navHelper";

export const navbarData:INavbarData[]=[
  {
  label:"Dashboard",
  routerLink:"dashboard",
  icon:"fa-duotone fa-grid-horizontal"
  },
  {
  label:"Lot",
  routerLink:"lot",
  icon:"fa-duotone fa-sign-hanging"
  },
  {
  label:"Property",
  routerLink:"property",
  icon:"fa-duotone fa-house-chimney",
  items:[
    {
      label:"Property manager",
      routerLink:"property",
    },
    {
      label:"New Property",
      routerLink:"property/new",
      items:[
        {
          label:"House",
          routerLink:"property/new/house"
        },
        {
          label:"Flat",
          routerLink:"property/new/flat"
        },
        {
          label:"Commercial",
          routerLink:"property/new/shop"
        },

      ]
    }
  ]
  },
  {
  label:"Owner",
  routerLink:"owner",
  icon:"fa-duotone fa-house-user"
  },
  {
  label:"Lodger",
  routerLink:"lodger",
  icon:"fa-duotone fa-house-person-return"
  },
  {
  label:"Events",
  routerLink:"event",
  icon:"fa-duotone fa-calendar-days"
  },
  {
  label:"Document",
  routerLink:"document",
  icon:"fa-duotone fa-folder-open"
  },


]
