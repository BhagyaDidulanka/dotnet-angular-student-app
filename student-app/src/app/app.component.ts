import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="/" routerLinkActive="active">Students</a>
      <a routerLink="/add" routerLinkActive="active">Add Student</a>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .navbar {
      background: #333;
      padding: 1rem;
      margin-bottom: 2rem;
    }
    .navbar a {
      color: white;
      margin-right: 1rem;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    .navbar a:hover {
      background: #555;
    }
    .navbar a.active {
      background: #007bff;
    }
    .container {
      padding: 0 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class AppComponent {
  title = 'Student Management';
}