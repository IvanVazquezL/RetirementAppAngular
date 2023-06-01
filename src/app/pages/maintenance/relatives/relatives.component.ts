import { Component } from '@angular/core';
import { Relative } from 'src/app/models/relative.model';
import { RelativeService } from 'src/app/services/relative.service';

@Component({
  selector: 'app-relatives',
  templateUrl: './relatives.component.html',
  styles: [
  ]
})
export class RelativesComponent {
  relatives : Relative[] = [];
  total : number = 0;
  columns : string[] = []
  
  constructor(private relativeService: RelativeService) {
    this.relativeService.getRelatives()
        .subscribe( ({total, relatives, columns}) => {
            this.columns = columns
            this.relatives = relatives;
            this.total = total
        });
  }
}
