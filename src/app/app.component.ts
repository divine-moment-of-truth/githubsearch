import { Component } from '@angular/core';
import { GithubService } from './services/github.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'app';
}
