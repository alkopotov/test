import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number,
  username: string,
  name: string,
  email: string,
}

@Injectable({
  providedIn: 'root'
})
export class AboutUsersService {
  public users: User[] = [];

  public user: User | Record<string, never> = {};

  
  constructor(private http: HttpClient) { 

  }

  public getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((data: any) => {
      this.users = data.map((item: any) => {
        return {
          id: item.id,
          username: item.username,
          name: item.name,
          email: item.email
        }
      });    
    })
  }

  public getUser(id: number) {
    this.user = {};
    this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .subscribe((data: any) => {
      this.user = {
        id: data.id,
        username: data.username,
        name: data.name,
        email: data.email
      }
    })
  }
}
