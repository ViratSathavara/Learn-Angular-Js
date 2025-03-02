import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
cities: string[] = ['Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Surat'];

employeeList: any[] = [
  {id: 1, name: 'virat', age: 22}, 
  {id: 2, name: 'sahil', age: 21}, 
  {id: 3, name: 'sugam', age: 21}, 
  {id: 4, name: 'kevin', age: 21}, 
  {id: 5, name: 'smit', age: 23}, 
  {id: 6, name: 'dev', age: 21} 
]

}
