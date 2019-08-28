import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CriarPartidaComponent } from './criar-partida/criar-partida.component';
export const ROUTES : Routes = [
{path: '', component: HomeComponent},
{path: 'partida', component: CriarPartidaComponent},
]