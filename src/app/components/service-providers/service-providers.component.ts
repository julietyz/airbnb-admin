import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  serviceProviders: Array<any>;

  constructor( ) {
    this.serviceProviders = [
      {
        name: 'Joe',
        lastName: 'Soap',
        email: 'joe@mail.com',
        cellPhone: 828073593,
        numberOfListings: 5
      },
      {
        name: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        cellPhone: 828073545,
        numberOfListings: 15
      }
    ];
  }

  ngOnInit() {
  }

}