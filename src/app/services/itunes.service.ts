import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  private baseurl = 'https://wt-e66be3d67b8ef842337c018b31a1c095-0.sandbox.auth0-extend.com/iTunes-angular';

  constructor(private httpClient: HttpClient) { }

  getAlbums(): Object {
    return this.httpClient.get(`${this.baseurl}/albums`)
      .toPromise();
  }
}