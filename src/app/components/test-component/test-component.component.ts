import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  public count = 0;

  public increment() {
    this.count++;
  }

  testFunc() {
    this.count+=10
  }

}
