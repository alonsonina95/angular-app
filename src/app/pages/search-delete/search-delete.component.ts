import { Component, OnInit } from '@angular/core';
import { GetContactsService } from 'src/app/services/get-contacts.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.scss']
})
export class SearchDeleteComponent implements OnInit {

  constructor(private getContactsService: GetContactsService) { }

  ngOnInit(): void {
  }

  public getAllContacts() {
      this.getContactsService.getContacts().subscribe(data => console.log(data));
  }

}
