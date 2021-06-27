import { ProgressService } from './../../../core/services/utils/progress.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {
  inProgress: Subject<boolean> = this._progressIndicatorService.inProgress;

  constructor(private readonly _progressIndicatorService: ProgressService) {}

  ngOnInit(): void {}
}
