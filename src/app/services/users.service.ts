import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APIResponse } from '../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(pageNumber: number, itemsPerPage: number = 5): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}?page=${pageNumber}&per_page=${itemsPerPage}`);
  }

}
