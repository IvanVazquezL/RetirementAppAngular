import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Nurse } from '../models/nurse.model';

const { base_url } = environment;

@Injectable({
  providedIn: 'root'
})
export class NurseService {

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

  getNurses() {
    const url = `${base_url}/nurse`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map(resp => {
          const nurses = resp.nurses.map(
            (nurse: any) => new Nurse(
              nurse.firstName,
              nurse.lastName,
              nurse.email,
              nurse.phoneNumber,
              nurse.shift,
              nurse.residents?.toString() ??'',
              nurse.uid 
            )
          );

          const columns = Object.keys(new Nurse('', '', '', '', '', '', ''));

          return {
            total: resp.total,
            nurses,
            columns
          }
        })
      )
  }
}
