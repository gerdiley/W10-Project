import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  user:any;
  id!: number;


  constructor(private router: ActivatedRoute, private userSrv: UserService ) { }

  ngOnInit(): void {

    this.router.params.subscribe(params => {
    this.id = +params['id'];
    this.user = this.userSrv.getUser(this.id)
    })
  }


}
