
import { ProductresloverServService } from './services/productreslover-serv.service';
import { ProductresolverComponent } from './menu/productresolver/productresolver.component';
import { DataproductsComponent } from './menu/dataproducts/dataproducts.component';
import { ProductsComponent } from './menu/products/products.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { LoginComponent } from './menu/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
   {path: 'dash', component: DashboardComponent},
   {path: 'Table', component: ProductsComponent},
   {path:'dataproducts',component:DataproductsComponent},
  //  {path:'ProReslover',resolve:{pdata:ProductresloverServService},component:ProductresolverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
