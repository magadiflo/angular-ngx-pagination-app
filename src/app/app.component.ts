import { Component, OnInit } from '@angular/core';

import { APIResponse } from './interfaces/api-response.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: any;
  pageNumber: number = 1;
  total: number = 0;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers(this.pageNumber)
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
