import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LeaveApprovals } from './leave-approvals';

@Injectable({
  providedIn: 'root'
})
export class LeaveApprovalsService {

  private baseUrl = 'http://localhost:8080/AbstractProject_01';
  private apiUrl = this.baseUrl + '/leave-approvals/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }))
  }




  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }))
  }

  create(data: LeaveApprovals): Observable<any> {
    return this.http.post(this.apiUrl, data, this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }))
  }

  update(data: LeaveApprovals): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}`, data, this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }))
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }))
  }
}
