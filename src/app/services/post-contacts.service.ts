import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact, HttpResponses, httpOptions } from '../interfaces/contact';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostContactsService {
  url: string = 'http://localhost:8080/api/contacts'; 

  constructor(private http: HttpClient) {}

  public createContact(newContact: Contact): Observable<HttpResponses> { 
      return this.http.post<HttpResponses>(this.url, JSON.stringify(newContact), httpOptions);
  }
}
