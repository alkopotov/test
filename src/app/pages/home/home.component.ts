import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) {}


  public deviceType: any =''
  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(max-width: 1280px)', '(max-width: 768px)'],)
    .subscribe ((state: BreakpointState) => { 
      if (state.breakpoints['(max-width: 1280px)'] && !state.breakpoints['(max-width: 768px)']) {
        this.deviceType = 'Tablet';
      } else if (state.breakpoints['(max-width: 768px)']) {
        this.deviceType = 'Mobile';
      } else {
        this.deviceType = 'Desktop';
      }
    });
  }

}
