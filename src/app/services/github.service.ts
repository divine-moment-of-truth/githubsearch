import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";
//import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '73effebc4b285c96bd4f';
  private client_secret = '081f2c71a742f47262a0e612892a8e6016813020';

  constructor(private _http: Http) {
    console.log('Github Service Ready.....');
    this.username = 'divine-moment-of-truth ';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .pipe(map(res => res.json()));
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .pipe(map(res => res.json()));
  }

  updateUser(username: string) {
    this.username = username;
  }
}
