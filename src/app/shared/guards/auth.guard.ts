import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ROUTE} from "../constants/routes-constants";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuth = false;
  ROUTE = ROUTE;

  constructor(
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.isAuth) {
      this.router.navigate([`/${this.ROUTE.AUTH}`]);
    }
    return this.isAuth;
  }


}
