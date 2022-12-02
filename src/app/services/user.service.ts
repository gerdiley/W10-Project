import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      author: "Flavio",
      email: "flavio@gmail.com",
      role: "user"
    },
    {
      id: 2,
      author: "Dario",
      email: "dario@gmail.com",
      role: "admin"
    },
    {
      id: 3,
      author: "Massimo",
      email: "massimo@gmail.com",
      role: "user"
    }
  ]
  constructor() { }

  getAllUser(){
    return this.users
  }

  getUser(id:number){
    return this.users.find(users => users.id == id )
  }
}
