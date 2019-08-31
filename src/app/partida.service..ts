import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';
import { URL_API } from './URL_API';
import { Observable } from 'rxjs';
import { Partida } from './model/partida.model';

@Injectable()
export class PartidaService{
constructor(private http : HttpClient){

}

public fazerJogada(partida : Partida)  : Observable<any>{
    return this.http.post(`${URL_API}/heroi-stefanini/partida/jogadas`,(partida)).pipe(map((response:any)=>{
        console.log(response)
        return response;
    }))
}

// public salvarMutante(partida : Partida)  : Observable<any>{
//     return this.http.post(`${URL_API}/heroi-stefanini/herois/mutanteplus`,(partida)).pipe(map((response:any)=>{
//         console.log(response)
//         return response;
//     }))
// }
}