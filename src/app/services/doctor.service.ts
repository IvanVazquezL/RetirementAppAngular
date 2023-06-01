import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor.model';
import { map } from 'rxjs/operators';

const { base_url } = environment;

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
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

  getDoctors() {
    const url = `${base_url}/doctor`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map(resp => {
          const doctors = resp.doctors.map(
            (doctor: any) => new Doctor(
              doctor.firstName,
              doctor.lastName,
              doctor.email,
              doctor.phoneNumber,
              doctor.specialization,
              doctor.residents,
              doctor.uid,
            )
          );

          const columns = Object.keys(new Doctor('', '', '', '', '', '', ''));

          return {
            total: resp.total,
            doctors,
            columns
          }
        })
      )
  }
}
