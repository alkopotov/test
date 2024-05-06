import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AboutUsersService } from '../../services/about-users.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MatListModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private routes: ActivatedRoute, public usersService: AboutUsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers();
  }
}
