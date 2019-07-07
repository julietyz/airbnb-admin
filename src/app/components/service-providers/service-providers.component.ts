import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  serviceProviders: Array<any>;

    // Radar
    public radarChartOptions: RadialChartOptions = {
      responsive: true,
    };
    public radarChartLabels: Label[] = ['Beach', 'Suburb', 'City Center', 'Mountains', 'Forest'];
  
    public radarChartData: ChartDataSets[] = [
      { data: [65, 59, 90, 81, 56], label: 'Apartnments' },
      { data: [70, 48, 40, 19, 96], label: 'Houses' }
    ];
    public radarChartType: ChartType = 'radar';


  constructor() {
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

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}