import { Routes,RouterModule } from "@angular/router";
import { UsersComponent } from './users.component';
import { UserResolverService } from 'src/app/services/user-resolver.service';
// const arr : Routes=[
// {path:'user', resolve:{uData:UserResolverService}, component:UsersComponent}
// ];
const routes: Routes = [
  {path:'userreslover',resolve:{uData:UserResolverService},component:UsersComponent},
];
export const usersrouting=RouterModule.forChild(routes);
