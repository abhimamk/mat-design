import { HomeComponent } from './menu/home/home.component';

import { ProductresloverServService } from './services/productreslover-serv.service';
import { ProductresolverComponent } from './menu/productresolver/productresolver.component';
import { DataproductsComponent } from './menu/dataproducts/dataproducts.component';
import { ProductsComponent } from './menu/products/products.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { LoginComponent } from './menu/login/login.component';
import { UserGuardService } from './services/user-guard.service';

const routes: Routes = [
  {path:'',component:LoginComponent,},
  {path:'dataproducts',canLoad:[UserGuardService],loadChildren:'./menu/dataproducts/product.module#ProductModule'},
  {path: 'dash', canLoad:[UserGuardService],loadChildren:'./menu/dashboard/dash.module#DashModule'},
  {path:'home',component:HomeComponent},
  //  {path: 'dash', component: DashboardComponent},
   {path: 'Table', canLoad:[UserGuardService],loadChildren:'./menu/products/table.module#TableModule'},

  //  {path:'dataproducts',component:DataproductsComponent},
  //  {path:'ProReslover',resolve:{pdata:ProductresloverServService},component:ProductresolverComponent},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes,{preloadingStrategy:AppCustomPreloader})],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
export const AppRoutingModule=RouterModule.forRoot(routes);
