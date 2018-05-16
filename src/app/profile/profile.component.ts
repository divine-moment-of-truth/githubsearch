import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: any;
  repos: any[];
  username: string;

  constructor(private _githubService: GithubService) {
    this.user = false;
    
    /*this._githubService.getUser().subscribe(user => {
      this.user = user;
      //console.log(user);
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      //console.log(repos);
    })*/
  }

  searchUsername() {
      this._githubService.updateUser(this.username);

      this._githubService.getUser().subscribe(user => {
        this.user = user;
      //console.log(user);
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      //console.log(repos);
    })
  }

}
