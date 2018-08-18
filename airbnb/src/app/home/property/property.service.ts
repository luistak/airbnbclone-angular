import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from './property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  // url: String = 'http://airbnb.douglasmaia.com/api/';

  constructor(private http: HttpClient) { }

  // getProperties(): Observable<Property[]> {
  //   return this.http.get<Property[]>(this.url + 'properties');
  // }
}
