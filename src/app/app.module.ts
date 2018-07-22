import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Pages
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

// Components
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { TrackFormComponent } from './components/track-form/track-form.component';

// Services
import { ItunesService } from './services/itunes.service';

const routes: Routes = [ 
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsPageComponent },
  { path: 'albums/:id', component: DetailsPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsPageComponent,
    AlbumListComponent,
    AlbumItemComponent,
    DetailsPageComponent,
    AlbumDetailsComponent,
    TrackFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ItunesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
