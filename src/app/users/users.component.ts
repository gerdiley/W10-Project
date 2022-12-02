import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
@Component({

  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]= []

  constructor(private userSrv: UserService ) { }

  ngOnInit(): void {
    this.users = this.userSrv.getAllUser();
  }


}
