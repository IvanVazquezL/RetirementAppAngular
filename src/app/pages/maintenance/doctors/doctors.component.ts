import { Component } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styles: []
})
export class DoctorsComponent {
  doctors : Doctor[] = [];
  total : number = 0;
  columns : string[] = []
  
  constructor(private nurseService: DoctorService) {
    this.nurseService.getDoctors()
        .subscribe( ({total, doctors, columns}) => {
            this.columns = columns
            this.doctors = doctors;
            this.total = total
        });
  }
}
