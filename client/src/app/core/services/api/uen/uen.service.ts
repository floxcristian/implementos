import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { IUen } from '../../../models/uen.model';

@Injectable({
  providedIn: 'root'
})
export class UenService {
  private API_URL: string = environment.apiUrl;

  constructor(public router: Router, public http: HttpClient) {}

  getAll(): Observable<IUen[]> {
    return this.http.get<IUen[]>(`${this.API_URL}/uen`);
  }
}
