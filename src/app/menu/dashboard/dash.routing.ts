import { DashboardComponent } from './dashboard.component';
import { Routes,RouterModule } from "@angular/router";
const arr : Routes=[
  {path:'', children:[
    {path:'',component:DashboardComponent},
  ]},
];
export const Dashrouting=RouterModule.forChild(arr);
