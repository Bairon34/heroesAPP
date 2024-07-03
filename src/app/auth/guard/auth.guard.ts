import { Injectable } from '@angular/core';
import { CanMatch,CanActivate, Route, UrlSegment, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {

  constructor(
    private authService: AuthService,
    private router :Router
    ) {}

  private checkAuthStatus(): boolean | Observable<boolean>{
    return this.authService.checkAutentication()
    .pipe(
      tap(isAuthenticate => console.log('Autehnticate ', isAuthenticate)),
      tap(isAuthenticate => {
        if(!isAuthenticate) {
          this.router.navigate(['./auth/login'])
        }

      })

    )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> {
    return this.checkAuthStatus()
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean  | Observable<boolean>  {
    return this.checkAuthStatus()
  }

}
