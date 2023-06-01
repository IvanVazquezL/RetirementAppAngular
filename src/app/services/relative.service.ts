import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Relative } from '../models/relative.model';

const { base_url } = environment;

@Injectable({
  providedIn: 'root'
})
export class RelativeService {
  constructor(private http : HttpClient) { }

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

  getRelatives() {
    const url = `${base_url}/relative`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map(resp => {
          const relatives = resp.relatives.map(
            (relative: any) => new Relative(
              relative.firstName,
              relative.lastName,
              relative.email,
              relative.phoneNumber ,
              relative.residentId,
              relative.uid
            )
          );

          const columns = Object.keys(new Relative('', '', '', '', '', ''));

          return {
            total: resp.total,
            relatives,
            columns
          }
        })
      )
  }
}
