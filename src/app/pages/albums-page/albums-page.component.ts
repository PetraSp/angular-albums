import { Component, OnInit } from '@angular/core';
import { ItunesService } from '../../services/itunes.service'

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent implements OnInit {

  albums: Object;

  constructor(private itunesService: ItunesService) { }

  ngOnInit() {
    this.albums = this.getAlbums();
  }

  getAlbums(): Object {
    return this.itunesService.getAlbums();
  }

}
