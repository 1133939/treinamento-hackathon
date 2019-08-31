import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';
import { URL_API } from './URL_API';
import { Observable } from 'rxjs';
import { Partida } from './model/partida.model';

@Injectable()
export class PersonagemService{
constructor(private http : HttpClient){

}


public criarMutante(partida : Partida)  : Observable<any>{
    return this.http.post(`${URL_API}/heroi-stefanini/personagem/mutante`,(partida)).pipe(map((response:any)=>{
        console.log(response)
        return response;
    }))
}
}