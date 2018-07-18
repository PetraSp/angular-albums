import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItunesService } from './services/itunes.service';

import { AppComponent } from './app.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { AlbumListComponent } from './components/album-list/album-list.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsPageComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ItunesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
