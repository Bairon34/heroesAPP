import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({providedIn: 'root'})
export class LogoutGuard implements CanMatch, CanActivate{


  constructor(
    private authService: AuthService,
    private router :Router
  ) { }

  private checkLogoutstatus(): boolean | Observable<boolean>{

    return this.authService.checkAutentication()
    .pipe(
      tap(isAuthenticate => console.log('Autehnticate ', isAuthenticate)),
      tap(isAuthenticate => {
        if(isAuthenticate) {
          this.router.navigate(['./'])
        }
      }),
      map( isAuthenticate => !isAuthenticate)

    )
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.checkLogoutstatus()
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean  | Observable<boolean> {
    return this.checkLogoutstatus()
  }

}
