import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIfComponent } from "./components/ng-if/ng-if.component";
import { NgForComponent } from "./components/ng-for/ng-for.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIfComponent, NgForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-App';
}
