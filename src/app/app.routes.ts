import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';

/*export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];*/


const appRoutes: Routes = [
{ path: '',   redirectTo: 'tree', pathMatch: 'full' },
{ path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard],
children: [{path:'', component: PanelComponent},{path: 'add', component:
AddTreeComponent}, {path:'manage-trees', component:ManageTreesComponent},
{path:'manage-users', component: ManageUsersComponent}, {path:'view-trees',
component: ViewTreeComponent}]},
{path:'tree', component: TreeComponent},
{path:'error', component: ErrorComponent},
{path:'unauthorized', component: UnauthorizedComponent},
{path:'login', component: LoginComponent},
{path:'entire-tree', component: EntireTreeComponent},
{ path: '**', component: PageNotFoundComponent },
];
