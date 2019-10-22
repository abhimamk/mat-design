import { ProductresloverServService } from "../../services/productreslover-serv.service";
import { ProductresolverComponent } from './productresolver.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {path:'ProReslover',resolve:{pdata:ProductresloverServService},component:ProductresolverComponent},
];
export const product1routing=RouterModule.forChild(routes);
