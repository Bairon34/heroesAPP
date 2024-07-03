import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments.dev';
import { User } from '../../interfaces/user.interfaace';
import { Observable, ObservableInput, catchError, map, of, tap } from 'rxjs';
import { HeroesRoutingModule } from '../../../heroes/heroes-routing.module';


@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environments.baseUrl
  private user?: User

  constructor(private http: HttpClient) { }

  get currentUser() : User | undefined {
    if(!this.user) return undefined;
    return structuredClone(this.user)
  }

  login (email: string , passwrod:string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/1`)
     .pipe(
      tap(user =>this.user = user),
      tap(user=> localStorage.setItem('token',user.id.toString()))
     );
  }

  checkAutentication(): Observable<boolean>{
    if (!localStorage.getItem('token')) return of (false)
    const token = localStorage.getItem('token');

    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => this.user = user),
      map(user => !!user),
      catchError(error => of(false))
    );
  }

  logout (){
    this.user = undefined
    localStorage.clear()
  }

}
