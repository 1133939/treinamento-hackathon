import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CriarPartidaComponent } from './criar-partida/criar-partida.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    CriarPartidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
