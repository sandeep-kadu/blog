import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: false,
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  @Output() updataDataEvent = new EventEmitter<string>();
}
