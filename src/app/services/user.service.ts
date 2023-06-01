import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

const { base_url } = environment;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public user!: User;

  constructor(
    private http   : HttpClient,
    private ngZone : NgZone,
    private router : Router
  ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  saveLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  validateToken(): Observable<boolean> {
    return this.http.get(`${base_url}/login/renew`,{
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map( (resp : any) => {
        const { email, role } = resp.user;
        this.user = new User(email, '', role);

        this.saveLocalStorage(resp.token)
        return true;
      }),
      catchError( error => of(false))
    );
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData)
      .pipe(
        tap( (resp : any) => {
          this.saveLocalStorage(resp.token)
        })
      )
  }

  logout() {
    localStorage.removeItem('token');

    this.ngZone.run(() => {
      this.router.navigateByUrl('/login')
    })
  }

  getUsers() {
    const url = `${base_url}/users`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map(resp => {
          const users = resp.users.map(
            (user: any) => new User(user.email, '', user.role, user.uid)
          );

          return {
            total: resp.total,
            users
          }
        })
      )
  }

  getUserById(id: string) {
    const url = `${ base_url }/users/${ id }`;
      return this.http.get<any>( url, this.headers )
                .pipe(
                  map( (resp: {ok: boolean, user: User }) => resp.user )
                );
  }

  createUser( user: any ) {
    const url = `${ base_url }/users`;
    return this.http.post( url, user, this.headers );
  }
}
