import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'search',
  template: `
    <div>
      Search <input (input)="search($event.target.value)" />
      <div *ngFor="let word of (searchWords$ | async)">
        {{ word }}
      </div>
    </div>
  `
})
export class SearchComponent  {
  public searchWords$: Observable<string[]>;

  private search$ = new Subject<string>();

  constructor(private httpClient: HttpClient) {
  }

  public ngOnInit() {
    this.searchWords$ = this.search$
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(text => text
        ? this.loadWords(text)
        : Observable.of([]))
      .catch(() => Observable.of([]));
  }

  public search(text: string): void {
    this.search$.next(text);
  }

  private loadWords(text: string): Observable<string[]> {
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${text}&limit=100&namespace=0&format=json&origin=*`;

    return Observable.timer(1000)
      .switchMap(() => this.httpClient.get<[ string, string[] ]>(url))
      .map(data => data[1]);
  }
}
