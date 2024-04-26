import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class AboutComponent implements OnInit{
  constructor() { }

  ngOnInit() {
  }

  flip1: string = 'inactive';
  flip2: string = 'inactive';
  flip3: string = 'inactive';
  flip4: string = 'inactive';
  flip5: string = 'inactive';
  flip6: string = 'inactive';

  toggleFlip1() {
    this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlip2() {
    this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlip3() {
    this.flip3 = (this.flip3 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlip4() {
    this.flip4 = (this.flip4 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlip5() {
    this.flip5 = (this.flip5 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlip6() {
    this.flip6 = (this.flip6 == 'inactive') ? 'active' : 'inactive';
  }
}
