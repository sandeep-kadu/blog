import { Component, OnInit } from '@angular/core';
import { Person } from './person.interface';
import { PersonModel } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
  // Using Interface
  person1: Person= { id: 1, name: 'Sandeep' };

  // Using Model (with method)
  person2!: PersonModel;

  message: string = '';

  ngOnInit(): void {
    this.person2 = new PersonModel(2, 'Amit');
    this.message = this.person2.greet(); // Call model method
  }
}
