import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, CommonModule, MatButtonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
firstName: string = 'Virat';
lastName: string = 'Sathavara';
age: number = 22;
isMarried: boolean = false;
address: any = {
  street: '123 Main St',
  city: 'Bangalore',
  state: 'Karnataka'
}
myPlaceholder: string = 'Enter your name';
hobbies: string[] = ['Editing', 'Coding', 'Wallyball']; 
currentdate: Date = new Date();
textVirat: string = 'text-blue';
  bgVirat: string = 'bg-blue-950';
constructor() {
  console.log(this.firstName)
}

showToMessage() {
  alert('Hello, ' + this.firstName + ' ' + this.lastName);
}
selectedHobby: string = this.hobbies[0];

changeCity(event: any) {
  alert(`City changed to ${event.target.value}`);
}

}
