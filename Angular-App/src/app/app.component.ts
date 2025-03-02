import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIfComponent } from "./components/ng-if/ng-if.component";
import { NgForComponent } from "./components/ng-for/ng-for.component";
import { NgClassComponent } from "./components/ng-class/ng-class.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIfComponent, NgForComponent, NgClassComponent, NgStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-App';
}
