import { DataproductsComponent } from './dataproducts.component';
import { Routes,RouterModule } from "@angular/router";

const arr : Routes=[
  {path:'', children:[
     {path:'',component:DataproductsComponent},
  ]},


];
export const prodcutrouting=RouterModule.forChild(arr);
