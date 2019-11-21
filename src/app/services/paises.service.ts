import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pais} from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private urlDePaises = 'https://restcountries.eu/rest/v2/all';
  constructor(private http: HttpClient) { }
  getPaises() {
    return this.http.get<Pais[]>(this.urlDePaises);
  }
}
