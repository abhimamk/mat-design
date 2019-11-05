import { ProductresloverServService } from "../../services/productreslover-serv.service";
import { ProductresolverComponent } from './productresolver.component';
import { Routes, RouterModule } from '@angular/router';
import { UserGuardService } from 'src/app/services/user-guard.service';

const routes: Routes = [
   {path:'ProReslover',resolve:{pdata:ProductresloverServService},component:ProductresolverComponent,canLoad:[UserGuardService],loadChildren:'./productresv.module#Product1Module'},
];
export const product1routing=RouterModule.forChild(routes);
