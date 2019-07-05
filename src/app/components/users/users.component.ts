import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<any>;

  constructor(
    private userService: UserService
  ) {
    this.users = [
      {
        name: 'Byron',
        lastName: 'de Villiers',
        email: 'byron@mail.com',
        cellPhone: 828073593
      },
      {
        name: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        cellPhone: 746541230
      },
      {
        name: 'Jeff',
        lastName: 'Briggs',
        email: 'jess@mail.com',
        cellPhone: 471234567
      }
    ];

  }

  ngOnInit() {
  }

}
