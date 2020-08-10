import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Model} from './model';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private url = 'http://0.0.0.0:8080/models/';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getModels(): Observable <Model> {
    return this.http.get<Model>(this.url).pipe(
      tap(val => console.log(val)),
      catchError(this.handleError)
    );
  }
}
