import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE} from "./shared/constants/routes-constants";
import {PageNotFoundComponent} from "./feedback/page-not-found/page-not-found.component";
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: ROUTE.APP, pathMatch: 'full'},
  {
    path: ROUTE.APP,
    loadChildren: () => import('./workspace/workspace.module').then(m => m.WorkspaceModule),
    canActivate: [AuthGuard]
  },
  {path: ROUTE.AUTH, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
