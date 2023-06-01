import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, CanActivate, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.userService.validateToken()
        .pipe(
          tap( isAuthenticated =>  {
            if ( !isAuthenticated ) {
              this.router.navigateByUrl('/login');
            }
          })
        );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.userService.validateToken()
      .pipe(
        map( isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigateByUrl('/login');
            return false;
          }
  
          return true;
        })
      );
  }
}
