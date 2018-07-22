import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItunesService } from '../../services/itunes.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  album: Object;

  constructor(private itunesService: ItunesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initAlbum();
  }

  initAlbum() {
    this.route.params
      .subscribe(params => {
        this.itunesService.getAlbumById(params.id)
          .subscribe(album => {
            this.album = album;
          });
      });
  }

}
