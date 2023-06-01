import { Component } from '@angular/core';
import { Resident } from 'src/app/models/resident.model';
import { ResidentService } from 'src/app/services/resident.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styles: [
  ]
})
export class ResidentsComponent {
  residents : Resident[] = [];
  total : number = 0;
  columns : string[] = []
  
  constructor(private residentService: ResidentService) {
    this.residentService.getResidents()
        .subscribe( ({total, residents, columns}) => {
            this.columns = columns
            this.residents = residents;
            this.total = total
        });
  }
}
