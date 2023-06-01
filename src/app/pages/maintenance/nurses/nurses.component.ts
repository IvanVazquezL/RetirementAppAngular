import { Component } from '@angular/core';
import { Nurse } from 'src/app/models/nurse.model';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styles: []
})
export class NursesComponent {
  nurses : Nurse[] = [];
  total : number = 0;
  columns : string[] = []
  
  constructor(private nurseService: NurseService) {
    this.nurseService.getNurses()
        .subscribe( ({total, nurses, columns}) => {
            this.columns = columns
            this.nurses = nurses;
            this.total = total
        });
  }
}
