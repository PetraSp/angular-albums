import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItunesService } from './services/itunes.service';

import { AppComponent } from './app.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsPageComponent
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
