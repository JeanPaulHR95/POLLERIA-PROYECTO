import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultarDniService {
  constructor(private http: HttpClient) {}

  consultarDni(dni: string): Observable<any>{
    let url: string = `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Implc3VzLmZsb3JlczE0QHVubXNtLmVkdS5wZSJ9.-ZANA2kpOAwJeOHczxMFV7njv3FvOpra5T__X0VERTY`;
    return this.http.get(url);
  }
}
