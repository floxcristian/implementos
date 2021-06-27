import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  inProgress = new Subject<boolean>();
  constructor() {}

  show(): void {
    this.inProgress.next(true);
    console.log('show..');
  }

  hide(): void {
    console.log('hide----');
    this.inProgress.next(false);
  }
}
