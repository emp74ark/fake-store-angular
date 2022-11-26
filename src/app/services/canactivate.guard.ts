import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  constructor(
    private user: UserService,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (this.user.authenticated) {
      return true;
    }
    this.router.navigate(['/auth'])
    return false;
  }

}
