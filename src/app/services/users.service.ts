import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(pageNumber: number) {
    return this.http.get(`${this.url}?page=${pageNumber}`);
  }

}
