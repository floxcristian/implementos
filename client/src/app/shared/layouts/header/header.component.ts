// Angular
import { Component, OnInit } from '@angular/core';
//rxjs
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //this.language$ = this.store.pipe(select(selectSettingsLanguage));
  }
}
