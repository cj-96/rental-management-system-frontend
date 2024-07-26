import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemManagementComponent } from './page/item-management/item-management.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ItemManagementComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-system';
}
