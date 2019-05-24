import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/order';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1,
      customer: {id: 1, name: 'Juergen Schmitz', email: 'Juergen.Schmitz@email.com', state: 'CO'},
      total: 105, 
      placed: new Date(2019, 5, 1), 
      fullfilled: new Date(2019, 9, 1), 
      status: 'Not Completetd'
    },
    {
      id: 1,
      customer: {id: 1, name: 'Peter Leise', email: 'peter.leise@email.com', state: 'CO'},
      total: 123, 
      placed: new Date(2019, 5, 1), 
      fullfilled: new Date(2019, 9, 1), 
      status: 'Not Completetd'
    },
    {
      id: 2,
      customer: {id: 2, name: 'Markus von der Ecke', email: 'Markus.Ecke@email.com', state: 'CO'},
      total: 66, 
      placed: new Date(2019, 5, 1), 
      fullfilled: new Date(2019, 9, 1), 
      status: 'Not Completetd'
    },
    {
      id: 3,
      customer: {id: 2, name: 'Lisa Klingel', email: 'Lisa.Klingel@email.com', state: 'CO'},
      total: 32, 
      placed: new Date(2013, 5, 1), 
      fullfilled: new Date(2015, 9, 1), 
      status: 'Completetd'
    },
    {
      id: 4,
      customer: {id: 2, name: 'Tina Muster', email: 'tina.muster@email.com', state: 'CO'},
      total: 5, 
      placed: new Date(2019, 5, 1), 
      fullfilled: new Date(2019, 5, 1), 
      status: 'Not Completetd'
    },
    {
      id: 5,
      customer: {id: 2, name: 'Günther Mustermann', email: 'Günther.mustermann@email.com', state: 'CO'},
      total: 34, 
      placed: new Date(2017, 8, 5), 
      fullfilled: new Date(2018, 11, 1), 
      status: 'Completetd'
    },
    {
      id: 6,
      customer: {id: 2, name: 'Peter Mustermann', email: 'peter.mustermann@email.com', state: 'CO'},
      total: 200, 
      placed: new Date(2014, 7, 1), 
      fullfilled: new Date(2015, 1, 1), 
      status: 'Completetd'
    },
    
  ];

  ngOnInit() {
  }

}
