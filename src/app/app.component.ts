import { Component, OnInit } from '@angular/core';

import { APIResponse, User } from './interfaces/api-response.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[] = [];
  pageNumber: number = 1;
  itemsPerPage: number = 2;
  total: number = 0;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers(this.pageNumber, this.itemsPerPage)
      .subscribe((response: APIResponse) => {
        this.users = response.data;
        this.total = response.total;
      });
  }

  pageChangeEvent(pageNumber: number): void {
    this.pageNumber = pageNumber;
    this.getUsers();
  }


}
