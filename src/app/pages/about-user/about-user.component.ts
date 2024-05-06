  import { Component, OnInit } from '@angular/core';
  import { AboutUsersService } from '../../services/about-users.service';
  import { ActivatedRoute, RouterLink } from '@angular/router';
  import {MatButtonModule} from '@angular/material/button';

  @Component({
    selector: 'app-about-user',
    standalone: true,
    imports: [RouterLink, MatButtonModule],
    templateUrl: './about-user.component.html',
    styleUrl: './about-user.component.css'
  })
  export class AboutUserComponent implements OnInit {
    constructor(public usersService: AboutUsersService, private routes: ActivatedRoute){}

    public user = this.usersService.user;

    ngOnInit(): void {
      this.usersService.getUser(this.routes.snapshot.params['id']);
    }
  }
