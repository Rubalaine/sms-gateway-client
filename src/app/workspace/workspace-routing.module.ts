import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE} from "../shared/constants/routes-constants";
import {AppComponent} from "./app/app.component";

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path: "", redirectTo: ROUTE.HOME, pathMatch: 'full'},
      {path: ROUTE.HOME, loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: ROUTE.USERS, loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
      {path: ROUTE.GROUPS, loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule {
}
