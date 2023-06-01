import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: []
})
export class TitleComponent implements OnDestroy {
  title!: string;
  private routeSubscription: Subscription;

  constructor(private router: Router) {
    this.routeSubscription = this.router.events
      .pipe(
        filter<any>(event => event instanceof ActivationEnd),
        map((event: ActivationEnd) => event.snapshot.url),
        map(url => url[url.length - 1].path.toUpperCase())
      )
      .subscribe((title: string) => {
        this.title = title;
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}