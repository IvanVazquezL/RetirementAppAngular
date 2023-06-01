import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Resident } from '../models/resident.model';

const { base_url } = environment;

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
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

  getResidents() {
    const url = `${base_url}/residents`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map(resp => {
          const residents = resp.residents.map(
            (resident: any) => new Resident(
              resident.firstName,
              resident.lastName,
              resident.dateOfBirth,
              resident.gender,
              resident.emergencyContact,
              resident.medicalHistory,
              resident.allergies,
              resident.medications,
              resident.roomNumber,
              resident.status,
              resident.key,
              resident.user,
              resident.uid
            )
          );

          const columns = Object.keys(new Resident('', '', '', '', '', '','', [''], '', '', '', ''));

          return {
            total: resp.total,
            residents,
            columns
          }
        })
      )
  }
}
