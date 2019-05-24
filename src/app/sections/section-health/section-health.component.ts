import { Component, OnInit } from '@angular/core';
import {Server} from '../../shared/server';

const SAMPLE_SERVERS =[
  {
    id: 1,
    name: 'Server01',
    isOnline: true
  },
  {
    id: 2,
    name: 'Server02',
    isOnline: false
  },
  {
    id: 3,
    name: 'Server03',
    isOnline: true
  },
  {
    id: 4,
    name: 'Server04',
    isOnline: true
  }
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;
  
  ngOnInit() { 
  }

}
;