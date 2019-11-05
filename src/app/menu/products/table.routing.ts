import { ProductsComponent } from './products.component';
import { Routes,RouterModule } from "@angular/router";

const arr : Routes=[
  {path:'', children:[
    {path:'',component:ProductsComponent}

  ]},


];
export const Tablerouting=RouterModule.forChild(arr);
