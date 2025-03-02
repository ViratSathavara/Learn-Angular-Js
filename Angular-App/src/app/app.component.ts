import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { UserComponent } from "./components/user/user.component";
import { SingleComponentDemoComponent } from "./components/single-component-demo/single-component-demo.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, UserComponent, SingleComponentDemoComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-App';
}
