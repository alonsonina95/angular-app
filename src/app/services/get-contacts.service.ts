import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class GetContactsService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/api/contacts'; 
  
  public getContacts(): Observable<Contact[]> {
      return this.http.get<Contact[]>(this.url);
  }
}
